module.exports = {
  testEnvironment: 'jsdom',
  testURL: 'http://localhost/',
  setupTestFrameworkScriptFile: './setupTests.js',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js'],
}
