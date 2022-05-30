/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withMDX({
  ...nextConfig,
  pageExtensions: ['ts', 'tsx', 'mdx'],
})
