var React = require('react');
var expect = require('chai').expect;
var enzyme = require('enzyme');
//var TopicHeader = require('../src/Topicheader');
import TopicHeader from '../src/topicheader';

describe("<TopicHeader />", function() {
  'use strict';

  describe('Text: ', function () {
    it("renders expected text", function() {
      var wrapper = enzyme.shallow(<TopicHeader />);
      expect(wrapper.text()).to.equal(' Topics ');
    });
  });
}); 