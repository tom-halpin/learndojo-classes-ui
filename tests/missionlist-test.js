var React = require('react');
var expect = require('chai').expect;
var enzyme = require('enzyme');
//var MissionList = require('../src/missionlist');
import MissionList from '../src/missionlist';

describe("<MissionList />", function() {
  'use strict';

  describe('Test suite for MissionList component ', function () {
    it("MissionList should exist", function() {

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

      // calling shallow on MissionList directly, meaning MissionList is the only component being rendered here. 
      // That means that doing shallow(<MissionList />) only renders just that component, not your entire app. 
      // It's not being rendered within <App/> or anything like that.
      // So need to manually pass in the props that the component expects, since they're not being provided by a parent component 
      // like in your actual application.
      // jsondata - Passing a json object to object to allow shallow copy proceed, 
      // clickHanlder - Passing anonymous function as the clickhandler to allow binding to take place
      var wrapper = enzyme.shallow(<MissionList linkto="#strandtitle" active={0} jsondata={mockdata} clickHandler={function () {}} />);
      
      // expect the component to exist
      expect(wrapper).to.exist;
      // expect the component type to be a div
      expect(wrapper.type()).to.equal('div');
      // expect the component to have certain properties
      expect(wrapper.props().linkto).to.be.defined;
      expect(wrapper.props().active).to.be.defined;      
      expect(wrapper.props().jsondata).to.be.defined;
      expect(wrapper.props().clickHandler1).to.be.defined;      
      
      // one mission passed into in mockdata so expect one image
      expect(wrapper.find('img')).to.have.length(1);
      // one mission passed into in mockdata so expect first image created by component will be img/cake.png      
      const image = wrapper.find('img');
      //expect(image.src).to.equal("img/cake1.png"); 
    
      // expect the text for the fade item to be 4th Class Maths
      const fadeitem = wrapper.find({className:"caption-content"});
      expect(fadeitem.text()).to.equal('4th Class Maths');
      // more detailed/involved tests go here
      // i.e. test to ensure mission div created in mission list
      // Finding elements using css selectors:
      //component.find('.my-class'); // by class name
      //component.find('#my-id'); // by id
      //component.find('td'); // by tag
      //component.find('div.custom-class'); // by compound selector

    });
  
  });
}); 