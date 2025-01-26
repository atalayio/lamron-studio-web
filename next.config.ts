import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https' as const,
        hostname: 'posterjack.ca',
        pathname: '/cdn/**',
      },
    ],
  },
} satisfies NextConfig;

export default withNextIntl(nextConfig);