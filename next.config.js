const withPlugins = require('next-compose-plugins');
const withMDX = require('@next/mdx')({ extension: /\.mdx$/ });

module.exports = withPlugins([
  [
    withMDX,
    {
      pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
      reactStrictMode: true,
      images: {
        domains: ['res.cloudinary.com'],
      },
      swcMinify: true,
      webpack: (config, { dev, isServer }) => {
        // Replace React with Preact only in client production build
        if (!dev && !isServer) {
          Object.assign(config.resolve.alias, {
            react: 'preact/compat',
            'react-dom/test-utils': 'preact/test-utils',
            'react-dom': 'preact/compat',
          });
        }

        return config;
      },
    },
  ],
]);
