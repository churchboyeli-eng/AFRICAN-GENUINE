const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const port = Number.parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV === 'development';
const app = next({ dev, hostname: '0.0.0.0', port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((request, response) => handle(request, response, parse(request.url, true)))
    .listen(port, '0.0.0.0', () => {
      console.log(`African Genuine Tours & Safaris listening on port ${port}`);
    });
});
