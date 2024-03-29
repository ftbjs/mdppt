const path = require('path')
const defaultsdeep = require('lodash.defaultsdeep')
const { findExistSync, logger } = require('@mdppt/utils')
const mdpptDefault = require('./mdppt.default.js')
const resolveEntry = require('./util/resolveEntry')
const resolveLocal = require('./util/resolveLocal')
const resolveCwd = require('./util/resolveCwd')
const resolveFavicon = require('./util/resolveFavicon')

// Custom config
function combineConfig(api) {
  let config = {}
  if (findExistSync(api.context, 'mdppt.config.js')) {
    config = require(path.resolve(process.cwd(), 'mdppt.config.js'))
  }
  return defaultsdeep(config, mdpptDefault)
}

module.exports = class Service {
  constructor(entry, context, options) {
    this.entry = entry
    this.context = context
    this.resolveEntry = resolveEntry
    this.resolveLocal = resolveLocal
    this.resolveCwd = resolveCwd
    this.favicon = resolveFavicon(this)
    // store the webpack config into the config field
    this.config = combineConfig(this)

    // set the command line current version
    this.currentVersion = options.parent._version

    // command line info when user start serve or build
    this.args = options

    if (!this.config.pages.enable && this.entry === '.') {
      logger.red('🔨 Please configuration mdppt.config.js & set multi pages config.')
      logger.green(`
        module.exports = {
          pages: {
            enable: true
          }
        }
      `)
      process.exit(1)
    }

    if (this.config.pages.enable && !this.config.pages.entry) {
      logger.red('🔨 Please specify a entry name for your project.')
      logger.red('🔨 The name should be your markdown file name in your project.')
      logger.green(`
        module.exports = {
          pages: {
            enable: true,
            entry: 'mdppt'
          }
        }
      `)
      process.exit(1)
    }
  }

  getEntry() {
    return this.entry
  }
}
