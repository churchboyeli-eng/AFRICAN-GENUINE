const cpanelStaticExport = process.env.CPANEL_STATIC_EXPORT === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = cpanelStaticExport
  ? {
      agentRules: false,
      output: 'export',
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : { agentRules: false };

export default nextConfig;
