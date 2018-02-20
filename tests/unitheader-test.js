var React = require('react');
var expect = require('chai').expect;
var enzyme = require('enzyme');
//var UnitHeader = require('../src/Unitheader');
import UnitHeader from '../src/unitheader';

describe("<UnitHeader />", function() {
  'use strict';

  describe('Text: ', function () {
    it("renders expected text", function() {
      var wrapper = enzyme.shallow(<UnitHeader />);
      expect(wrapper.text()).to.equal(' Units ');
    });
  });


}); 