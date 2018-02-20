import React, { Component } from 'react';
import $ from 'jquery';
//import logo from './logo.svg';
//import './App.css';
import MissionHeader from './missionheader';
import MissionList from './missionlist';
import StrandHeader from './strandheader';
import StrandList from './strandlist';
import UnitHeader from './unitheader';
import UnitList from './unitlist';
import TopicHeader from './topicheader';
import TopicList from './topiclist';

class App extends Component {

   constructor(props) {
      super(props);
		
      this.state = {
        jsondata: {},
        dataloaded: false,
        currentMissionText:'',
        currentMission: 0, 
        currentStrand: 0,
        currentUnit: 0
      }

      this.handleMissionClick = this.handleMissionClick.bind(this)
      this.handleStrandClick = this.handleStrandClick.bind(this)
      this.handleUnitClick = this.handleUnitClick.bind(this)
      this.handleTopicClick = this.handleTopicClick.bind(this)
   };
   /*
   setNewNumber() {
      this.setState({data: this.state.data + 1})
   }
   */  
  handleMissionClick (index, missionText) {
    // handle mission link click, update the component state so react will re-render the affected elements in the DOM
    var jsonData = this.state.jsondata;
    var strandid = 0, unitid = 0;

    for (var m = 0; m < jsonData.classes.missions.length ; m++) 
    {
      if(jsonData.classes.missions[m].missionid === index)
      {
        if(jsonData.classes.missions[m].strands.length > 0) 
        {
          strandid = jsonData.classes.missions[m].strands[0].strandid ;
          if(jsonData.classes.missions[m].strands[0].units.length > 0)
          {
            unitid = jsonData.classes.missions[m].strands[0].units[0].unitid;
          } 
        }
        break;
      }
    }
    // update the state
    this.setState({
      currentMissionText: missionText,
    	currentMission: index, 
      currentStrand: strandid,      
      currentUnit: unitid
    });
  }

  handleStrandClick (index){
    // handle strand link click, update the component state so react will re-render the affected elements in the DOM
    var jsonData = this.state.jsondata;    
    var unitid = 0;

    for (var m = 0; m < jsonData.classes.missions.length ; m++) 
    {
      if(jsonData.classes.missions[m].missionid === this.state.currentMission)
      {
        for (var s = 0; s < jsonData.classes.missions[m].strands.length ; s++) 
        {
          if(jsonData.classes.missions[m].strands[s].strandid === index)
          {
            if(jsonData.classes.missions[m].strands[s].units.length > 0) 
            {
              unitid = jsonData.classes.missions[m].strands[s].units[0].unitid ;
            }
            break;
          }
        }
        break;
      }
    }
    // update component state
    this.setState({ 
        currentStrand: index,
        currentUnit: unitid
     });
  }

  handleUnitClick(index){
    // handle unit link click, update the component state so react will re-render the affected elements in the DOM    
    this.setState({ 
        currentUnit: index
    });
  }

  handleTopicClick(index){

  }

   componentDidMount() {
     var url = 'https://learningdojo.interserver.cc/api/countryclasses/1?_format=json';
     var proxy = 'https://cors-anywhere.herokuapp.com/';

      // when component is mounted call the REST API to get the mission strand unit and topics for the specified country
      $.ajax({
          url: proxy + url,
          method: 'GET',
          success: function(result) {
              // when call succeeds update the component state so react will re-render the affected elements in the DOM 
              this.setState({jsondata: result});
              this.setState({dataloaded: true});
              //alert("success ");
          }.bind(this),
          error: function(e, xhr, opt){
            alert("Error loading " + opt.url + ": " + xhr.status + " " + xhr.statusText);
          }//.bind(this)
      });
   }
   
  render() {
      if(this.state.dataloaded)
      {
        return (
            <div>
                {/*<!-- This element's contents will be replaced with react component. -->*/}
                <MissionHeader/>
                <MissionList 
                  linkto="#strandtitle" 
                  active={this.state.currentMission}
                  jsondata={this.state.jsondata}
                  clickHandler={this.handleMissionClick} />
                <StrandHeader currentMissionText={this.state.currentMissionText}/>
                <StrandList
                  linkto="#strandtitle"
                  className="strands"
                  active={this.state.currentStrand}
                  currentMission={this.state.currentMission}
                  jsondata={this.state.jsondata}
                  clickHandler={this.handleStrandClick}
                />
                <UnitHeader/>
                <UnitList
                  linkto="#strandtitle"
                  className="units"        
                  active={this.state.currentUnit}
                  currentMission={this.state.currentMission}
                  currentStrand={this.state.currentStrand}
                  jsondata={this.state.jsondata}
                  clickHandler={this.handleUnitClick}                
                />
                <TopicHeader/>
                <TopicList 
                  active='0'
                  currentMission={this.state.currentMission}
                  currentStrand={this.state.currentStrand}
                  currentUnit={this.state.currentUnit}
                  jsondata={this.state.jsondata}
                  clickHandler={this.handleTopicClick}
                />
            </div>
        );
      }
      else {
        // if data is not loaded display a loading please wait message
        return (
          <div className="loading">Loading please wait ...</div>
        );
      }     
    }
  }

export default App;
