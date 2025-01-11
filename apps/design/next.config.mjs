import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@c14/design-system'],
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
};

export default withNextra(nextConfig);
