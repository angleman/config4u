// config4u by angleman, MIT
// Environment, command line or JSON file with comments and single quotes

function Config4u(DEFAULT) {
    "use strict"

	var ALCE              = require('alce')                            // walmartlabs/ALCE
	var xtend             = require('xtend')                           // Raynos/xtend
	var fs                = require('fs')
	var argv              = require('minimist')(process.argv.slice(2)) // substack/minimist
	var configDir         = process.cwd()
	var configFile        = 'config.json'
	var configSource      = configDir + '/' + configFile
	var config            = (DEFAULT) ? DEFAULT : {}
	var json              = ''
	var parsed            = {}

	function findConfig(configSource) {
		configSource      = argv.config
		var asDir         = argv.config + '/' + configFile
		var asFile        = configDir   + '/' + argv.config
		if (configSource.substr(0,1) == '/' && fs.existsSync(configSource)) {
			// fully qualified path that exists so it's good to go
		} else if (fs.existsSync(asDir)) {
			configSource  = asDir
		} else if (fs.existsSync(asFile)) {
			configSource  = asFile
		}
		var stat          = fs.statSync(configSource)
		if (stat.isDirectory()) {
			configSource += '/' + configFile
		}
		return configSource
	}
	
	function updateConfig(json, configSource) {
		if (configSource) {
			configSource  = findConfig(configSource)
			json          = fs.readFileSync(configSource, 'utf8')
		}
		parsed            = ALCE.parse(json, {meta: false})
		config            = xtend(config, parsed)
	}
	
	// config file assigned via command line --config and/or via NODE_CONFIG_DIR environment variable
	if (argv.config)                 updateConfig('', argv.config)
	else                             updateConfig('', configSource)
	if (process.env.NODE_CONFIG_DIR) updateConfig('', process.env.NODE_CONFIG_DIR)
	if (process.env.NODE_ENV)        updateConfig(process.env.NODE_ENV)
	
	return config
}

module.exports = Config4u