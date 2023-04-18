/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, '/src/styles')],
    prependData: `@import "colors.scss";`
  },
  env: {
    apiHost: 'http://localhost:7070',
  },
}

module.exports = nextConfig
