module.exports = {
  globals: {
    __PATH_PREFIX__: '',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.js',
  },
  setupFiles: ['<rootDir>/loadershim.js'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['node_modules', '.cache'],
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(test).ts?(x)'],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.jsx?$': '<rootDir>/jest-preprocess.js',
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
};
