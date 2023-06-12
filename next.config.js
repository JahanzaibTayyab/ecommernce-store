/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  webpack: (config) => {
    config.externals = [...config.externals, "bcrypt"];
    return config;
  },
};

module.exports = nextConfig;
