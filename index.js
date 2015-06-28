var schema = require('@kemitchell/billing-schema')
var tv4 = require('tv4')

module.exports = function(data) {
  return tv4.validateMultiple(data, schema) }
