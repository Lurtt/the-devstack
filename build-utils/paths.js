const path = require('path')

module.exports = {
  localhostUrl: 'http://localhost:3030',
  inputPath: path.resolve(__dirname, '../', 'src'),
  outputPath: path.resolve(__dirname, '../', 'dist'),
  htmlTemplatePath: `${__dirname}/index.html`,
}
