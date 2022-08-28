/** @type {import('next').NextConfig} */
module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}
const STUDIO_REWRITE = {
  source: "/studio/:path*",
  destination:
      process.env.NODE_ENV === "development"
          ? "http://localhost:3333/studio/:path*"
          : "/studio/index.html",
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
