const path = require('path')

module.exports = {
  process (_src, filename) {
    filename = filename.replace('?inline', '')
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';'
  }
}
