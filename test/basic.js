// mocha doc: http://visionmedia.github.io/mocha/

assert = require('assert')
//mocha = require('mocha')
//should = mocha.should

describe('basic', function() {
    it('module loads', function() {
		config4u = require('../index.js')
		assert(config4u !== undefined)
    })
})
