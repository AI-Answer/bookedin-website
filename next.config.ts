import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => {
    return {
      beforeFiles: [
        {
          source: '/blog',
          destination: 'https://bookedin.feather.blog/blog',
        },
        {
          source: '/blog/:path*',
          destination: 'https://bookedin.feather.blog/blog/:path*',
        },
        {
          source: '/_feather',
          destination: 'https://bookedin.feather.blog/_feather',
        },
        {
          source: '/_feather/:path*',
          destination: 'https://bookedin.feather.blog/_feather/:path*',
        },
      ],
    }
  },
  headers: async () => {
    return [
      {
        source: '/blog',
        headers: [
          {
            key: 'X-Forwarded-Host',
            value: 'bookedin.ai',
          },
        ],
      },
      {
        source: '/blog/:slug*',
        headers: [
          {
            key: 'X-Forwarded-Host',
            value: 'bookedin.ai',
          },
        ],
      },
      {
        source: '/_feather',
        headers: [
          {
            key: 'X-Forwarded-Host',
            value: 'bookedin.ai',
          },
        ],
      },
      {
        source: '/_feather/:slug*',
        headers: [
          {
            key: 'X-Forwarded-Host',
            value: 'bookedin.ai',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
