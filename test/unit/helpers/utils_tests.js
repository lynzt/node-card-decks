'use strict';
const chai = require('chai');
const expect = chai.expect;
const utils = require('./../../../lib/helpers/utils');

describe('utils helpertests', function() {
  describe('test setOptionDefaults()', function() {
    it('should return default options', function() {
      let defaultOptions = {'cat': 1, 'dog': 2};
      let options = utils.setOptionDefaults({}, defaultOptions);
      expect(options).to.deep.equal({'cat': 1, 'dog': 2});
    });
    it('should return updated/modified options', function() {
      let defaultOptions = {'cat': 1, 'dog': 2};
      let options = utils.setOptionDefaults({'bird': 5, 'cat': 2}, defaultOptions);
      expect(options).to.deep.equal({'cat': 2, 'dog': 2, 'bird': 5});
    });
  });

});
