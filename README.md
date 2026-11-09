# African Genuine Tours & Safaris

## cPanel production deployment

This is a Next.js 14 application with server routes. Deploy it as a **Node.js application** in cPanel; do not upload it as a static HTML site.

### Requirements

- cPanel with **Setup Node.js App** / CloudLinux Node.js Selector enabled
- Node.js 20 or newer
- A cPanel mailbox for website enquiries, for example `enquiries@yourdomain.com`

### 1. Keep GitHub as the backup

Keep the repository private and use it as the source backup. In cPanel Terminal:

```bash
git clone git@github.com:churchboyeli-eng/AFRICAN-GENUINE.git african-genuine
cd african-genuine
npm ci
```

For a future update, make a commit locally, push it to GitHub, then on cPanel run:

```bash
cd ~/african-genuine
git pull --ff-only origin main
npm ci
npm run build
```

### 2. Create the Node application

In **cPanel → Setup Node.js App**:

1. Choose Node.js 20+ and Production mode.
2. Set the application root to the cloned project folder.
3. Set the application URL to your domain or subdomain.
4. Set the startup file to `server.js`.
5. Add `NODE_ENV=production` under Environment Variables.
6. Run `npm ci` and `npm run build` in cPanel Terminal, then click **Restart** in Setup Node.js App.

`server.js` reads cPanel's assigned `PORT` automatically. Do not set a fixed production port.

### 3. Configure cPanel email delivery

Create a mailbox in **cPanel → Email Accounts**, then open **Connect Devices** to find the exact SMTP host, port, and encryption settings. Add the following values in **Setup Node.js App → Environment Variables**:

```text
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=enquiries@yourdomain.com
SMTP_PASSWORD=your-cpanel-mailbox-password
MAIL_TO=enquiries@yourdomain.com
MAIL_FROM_NAME=African Genuine Tours & Safaris
```

All website enquiries and newsletter requests are delivered to `MAIL_TO` through this cPanel mailbox. The visitor's email address is used only as the Reply-To address. Keep these values out of GitHub and out of `.env.example`.

### 4. Optional WhatsApp configuration

The contact forms deliver email through cPanel first. WhatsApp Cloud API notifications remain optional. Add the `WHATSAPP_*` variables from `.env.example` only if you want the additional WhatsApp notification.

### 5. Smoke test after deployment

1. Visit `/contact` and submit an enquiry.
2. Confirm it arrives in the `MAIL_TO` cPanel mailbox.
3. Submit a newsletter request from the footer or About page.
4. Confirm it also arrives in the same mailbox.
5. Check cPanel → Setup Node.js App logs if delivery fails.

## Local development

```bash
npm install
npm run dev
```

For local email testing, create `.env.local` with the cPanel SMTP values. Never commit `.env.local`.
