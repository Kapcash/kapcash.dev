module.exports = {
  moduleNameMapper: {
    '^@/(.*\\.svg)\\?inline$': '<rootDir>/$1',
    '^~/(.*\\.svg)\\?inline$': '<rootDir>/$1',
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: [
    'ts',
    'js',
    'vue',
    'json',
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    '.+\\.(png|svg|jpg)$': '<rootDir>/test/svgTransformer.js',
  },
  transformIgnorePatterns: [
    '/node_modules/particles.vue$',
  ],
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
  ],
}
