/** @type {import('next').NextConfig} */

const STUDIO_REWRITE = {
  source: "/studio/:path*",
  destination:
      process.env.NODE_ENV === "development"
          ? "http://localhost:3333/studio/:path*"
          : "/travel-vi/index.html",
};

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    APP_URL: 'http://localhost:3000'
  },
  rewrites: () => [STUDIO_REWRITE],
}

module.exports = nextConfig
