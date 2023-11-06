/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  env: {
    // Local Development Env
    SERVER_ROOT_URL: "http://localhost:1337",
    SERVER_GRAPHQL_URL: "http://localhost:1337/graphql",

    // Remote Development Env
    // SERVER_ROOT_URL: "http://45.142.214.167:1337",
    // SERVER_GRAPHQL_URL: "http://45.142.214.167:1337/graphql",

    // Production Env
    // SERVER_ROOT_URL: "https://[Real domain]",
    // SERVER_GRAPHQL_URL: "https://[Real domain]/graphql",
  },
  i18n,
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
