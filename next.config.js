/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
}

module.exports = withMDX({
  ...nextConfig,
  pageExtensions: ['ts', 'tsx', 'mdx'],
})
