module.exports = {
  testEnvironment: 'node',
  setupTestFrameworkScriptFile: './setupTests.js',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js'],
}
