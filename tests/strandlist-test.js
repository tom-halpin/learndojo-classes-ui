var React = require('react');
var expect = require('chai').expect;
var enzyme = require('enzyme');
import StrandList from '../src/strandList';

describe("<StrandList />", function() {
  'use strict';

  describe('Test suite for StrandList component ', function () {
    it("StrandList should exist", function() {

      var mockdata = JSON.parse( '{'+
        '"classes": {'+
          '"countryid": "1",'+
          '"countryname": "Ireland",'+
          '"missions": [{'+
            '"missionid": "1",'+
            '"missionname": "4th Class Maths",'+
            '"strands": [{'+
              '"strandid": "2",'+
              '"strandname": "Number ",'+
              '"units": [{'+
                '"unitid": "2",'+
                '"unitname": "Place Values",'+
                '"topics": [{'+
                  '"topicid": "4",'+
                  '"topicname": "Place Values",'+
                  '"externalurl": "https:\/\/ie.ixl.com\/math\/class-4\/place-values"'+
                '}]'+
              '}]'+
            '}]'+
          '}]'+
        '}'+
      '}');

      // calling shallow on StrandList directly, meaning StrandList is the only component being rendered here. 
      // That means that doing shallow(<StrandList />) only renders just that component, not your entire app. 
      // It's not being rendered within <App/> or anything like that.
      // So need to manually pass in the props that the component expects, since they're not being provided by a parent component 
      // like in your actual application.
      // jsondata - Passing a json object to object to allow shallow copy proceed, 
      // clickHanlder - Passing anonymous function as the clickhandler to allow binding to take place
      var wrapper = enzyme.shallow(<StrandList linkto="#strandtitle" active={0}  className="strands"
                                    currentMission={1} jsondata={mockdata} clickHandler={function () {}} />);
      expect(wrapper).to.exist;

      expect(wrapper.type()).to.equal('div');
   
      // more detailed/involved tests go here
      // i.e. test to ensure strand div created in strand list
    });
  });
}); 