module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  globals: {
    twttr: 'readonly'
  },
  plugins: [
  ],
  // add your custom rules here
  rules: {
    camelcase: 'off'
  }
}
