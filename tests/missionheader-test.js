var React = require('react');
var expect = require('chai').expect;
var enzyme = require('enzyme');
//var MissionHeader = require('../src/missionheader');
import MissionHeader from '../src/missionheader';

describe("<MissionHeader />", function() {
  'use strict';

  describe('Text: ', function () {
    it("renders expected text", function() {
      var wrapper = enzyme.shallow(<MissionHeader />);
      expect(wrapper.text()).to.equal(' LearnDojo Classes - Pick one to start. ');
    });
  });


}); 