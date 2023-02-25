module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
    "^.+\\.ts?$": "ts-jest",
    ".*\\.(vue)$": "vue-jest",
  },
  setupFilesAfterEnv: ['<rootDir>/tests/unit/setup.ts'],
}

