/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
