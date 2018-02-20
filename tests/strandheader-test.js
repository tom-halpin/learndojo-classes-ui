var React = require('react');
var expect = require('chai').expect;
var enzyme = require('enzyme');
//var StrandHeader = require('../src/Strandheader');
import StrandHeader from '../src/strandheader';

describe("<StrandHeader />", function() {
  'use strict';

  describe('Text: ', function () {
    it("renders expected text", function() {
      var wrapper = enzyme.shallow(<StrandHeader />);
      expect(wrapper.text()).to.equal(' Strands ');
    });
  });
}); 