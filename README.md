# African Genuine Tours & Safaris

## cPanel production deployment

The current Namecheap plan does not expose a Node.js application manager and its SSH shell is disabled. Production is therefore delivered as a static Next.js export, with a small PHP endpoint for enquiries and newsletter requests. The source application and its Vercel-compatible server routes remain in GitHub.

### Requirements

- Node.js 20 or newer on the development computer
- SFTP access to the cPanel account
- The cPanel mailbox `bookings@africangenuinetravel.com`

### 1. Keep GitHub as the backup

Keep the repository private and use it as the source backup. Build updates on the development computer:

```bash
git clone git@github.com:churchboyeli-eng/AFRICAN-GENUINE.git
cd AFRICAN-GENUINE
npm ci
npm run build:cpanel
```

The generated `cpanel-deploy/` directory is intentionally ignored by Git. Upload its contents to `public_html/` over SFTP. Keep `.well-known/` in place so SSL renewal continues to work.

### 2. Email delivery

The export places `deploy/cpanel/contact.php` at `/api/contact.php`. It accepts same-origin JSON requests, validates and rate-limits them, and delivers both enquiries and newsletter requests to:

```text
bookings@africangenuinetravel.com
```

Mail is sent locally by cPanel as `bookings@africangenuinetravel.com`; no mailbox password is stored in the repository or in browser code. The visitor's email is used only as the Reply-To address.

### 3. Future updates

```bash
git pull --ff-only origin main
npm ci
npm run build:cpanel
```

Upload the refreshed contents of `cpanel-deploy/` to `public_html/`.

### 4. Smoke test after deployment

1. Visit `/contact` and submit an enquiry.
2. Confirm it arrives in the `MAIL_TO` cPanel mailbox.
3. Submit a newsletter request from the footer or About page.
4. Confirm it also arrives in the same mailbox.
5. Check the cPanel Error Log and email delivery reports if delivery fails.

## Local development

```bash
npm install
npm run dev
```

The normal local Next.js build continues to use `/api/contact` and the server-side SMTP variables documented in `.env.example`. Never commit `.env.local`.
