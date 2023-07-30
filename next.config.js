const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: false,
    poweredByHeader: false,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    async rewrites() {
        return {
            fallback: [
                {
                    source: process.env.API_SOURCE,
                    destination: process.env.API_URL,
                },
            ],
        }
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
}

module.exports = nextConfig