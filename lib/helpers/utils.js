"use strict";
const self = module.exports;
const _ = require('underscore');

exports.setOptionDefaults = function(options, defaults) {
  return _.defaults({}, _.clone(options), defaults);
}
