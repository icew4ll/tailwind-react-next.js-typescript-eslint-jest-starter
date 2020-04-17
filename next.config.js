/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()

const ENV_VARS = {
  SITE_NAME: process.env.SITE_NAME,
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  env: ENV_VARS,
  publicRuntimeConfig: ENV_VARS,
  poweredByHeader: false,
})
