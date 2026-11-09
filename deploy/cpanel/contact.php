<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    header('Allow: POST');
    echo json_encode(['error' => 'Method not allowed.']);
    exit;
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '') {
    $originHost = parse_url($origin, PHP_URL_HOST);
    $allowedHosts = ['africangenuinetravel.com', 'www.africangenuinetravel.com'];
    if (!is_string($originHost) || !in_array(strtolower($originHost), $allowedHosts, true)) {
        http_response_code(403);
        echo json_encode(['error' => 'Origin not allowed.']);
        exit;
    }
}

$raw = file_get_contents('php://input');
if (!is_string($raw) || $raw === '' || strlen($raw) > 12000) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid submission.']);
    exit;
}

$data = json_decode($raw, true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid submission.']);
    exit;
}

function clean_field(mixed $value, int $limit = 2000): string
{
    if (!is_string($value)) return '';
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $value) ?? '';
    return mb_substr(trim($value), 0, $limit);
}

$kind = ($data['kind'] ?? '') === 'newsletter' ? 'newsletter' : (($data['kind'] ?? '') === 'enquiry' ? 'enquiry' : '');
$name = clean_field($data['name'] ?? '', 160);
$email = clean_field($data['email'] ?? '', 254);

if ($kind === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || ($kind === 'enquiry' && $name === '')) {
    http_response_code(400);
    echo json_encode(['error' => 'Please check the required fields and try again.']);
    exit;
}

$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateFile = sys_get_temp_dir() . '/agt-contact-' . hash('sha256', $ip) . '.json';
$now = time();
$attempts = [];
$handle = fopen($rateFile, 'c+');

if ($handle !== false && flock($handle, LOCK_EX)) {
    $contents = stream_get_contents($handle);
    $stored = is_string($contents) ? json_decode($contents, true) : null;
    if (is_array($stored)) {
        $attempts = array_values(array_filter($stored, static fn ($time): bool => is_int($time) && ($now - $time) < 60));
    }
    if (count($attempts) >= 5) {
        flock($handle, LOCK_UN);
        fclose($handle);
        http_response_code(429);
        echo json_encode(['error' => 'Please wait a moment before trying again.']);
        exit;
    }
    $attempts[] = $now;
    ftruncate($handle, 0);
    rewind($handle);
    fwrite($handle, json_encode($attempts));
    fflush($handle);
    flock($handle, LOCK_UN);
    fclose($handle);
}

$to = 'bookings@africangenuinetravel.com';
$from = 'bookings@africangenuinetravel.com';

if ($kind === 'newsletter') {
    $subject = 'Newsletter request — ' . $email;
    $body = "New newsletter request from the website.\n\n"
        . 'Name: ' . ($name !== '' ? $name : 'Not provided') . "\n"
        . 'Email: ' . $email . "\n";
} else {
    $phone = clean_field($data['phone'] ?? '', 80);
    $tripType = clean_field($data['tripType'] ?? '', 120);
    $dates = clean_field($data['dates'] ?? '', 120);
    $guests = clean_field($data['guests'] ?? '', 80);
    $message = clean_field($data['message'] ?? '');
    $subject = 'New safari enquiry — ' . $name;
    $lines = [
        'New website enquiry',
        'Name: ' . $name,
        'Email: ' . $email,
    ];
    if ($phone !== '') $lines[] = 'Phone / WhatsApp: ' . $phone;
    if ($tripType !== '') $lines[] = 'Trip type: ' . $tripType;
    if ($dates !== '') $lines[] = 'Travel dates: ' . $dates;
    if ($guests !== '') $lines[] = 'Guests: ' . $guests;
    if ($message !== '') $lines[] = "Message:\n" . $message;
    $body = implode("\n\n", $lines) . "\n";
}

$headers = implode("\r\n", [
    'From: African Genuine Tours & Safaris <' . $from . '>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: African Genuine Tours Website',
]);

$sent = mail($to, $subject, $body, $headers);
if (!$sent) {
    error_log('African Genuine Tours website email delivery failed.');
    http_response_code(500);
    echo json_encode(['error' => 'We could not send your message. Please contact us on WhatsApp.']);
    exit;
}

echo json_encode(['ok' => true]);
