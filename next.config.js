/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MOVIESDB_API_KEY: "5d3beebfa1457b27c730962eee521037",
  },
  images: {
    domains: ["image.tmdb.org"],
  },
};

module.exports = nextConfig;
