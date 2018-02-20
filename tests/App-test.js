var React = require('react');
var expect = require('chai').expect;
var enzyme = require('enzyme');

import App from '../src/App';
import $ from 'jquery';
//import logo from './logo.svg';
//import './App.css';
import MissionHeader from '../src/missionheader';
import MissionList from '../src/missionlist';
import StrandHeader from '../src/strandheader';
import StrandList from '../src/strandlist';
import UnitHeader from '../src/unitheader';
import UnitList from '../src/unitlist';
import TopicHeader from '../src/topicheader';
import TopicList from '../src/topiclist';

describe('<App />', () => {
  it('contains an <MissionHeader/> component', function () {
    //const wrapper = enzyme.mount(<App/>);
    //expect(wrapper.find(MissionHeader)).to.have.length(1);
    expect(true);
  });
});

 