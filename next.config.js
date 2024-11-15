/** @type {import('next').NextConfig} */
const { withSentryConfig } = require('@sentry/nextjs')

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/v0/**',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        port: '',
        pathname: '/dynamic/image/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.dribbble.com',
        port: '',
        pathname: '/userupload/**',
      },
    ],
  },
  sentry: {
    hideSourceMaps: true,
  },
}

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  sourceMapReference: false,
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
}

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions)
