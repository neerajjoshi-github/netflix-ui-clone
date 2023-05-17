/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    MOVIESDB_API_KEY: "5d3beebfa1457b27c730962eee521037",
  },
};

module.exports = nextConfig;
