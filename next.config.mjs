const cpanelStaticExport = process.env.CPANEL_STATIC_EXPORT === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = cpanelStaticExport
  ? {
      output: 'export',
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : {};

export default nextConfig;
