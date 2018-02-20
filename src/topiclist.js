import React, { Component } from 'react';

class TopicList extends Component {

   constructor(props) {
      super(props);
		
      this.state = {
        active: 0
      }
   };

  render() {

    var jsonData = this.props.jsondata;
    var links = [];
    var m = 0, s = 0, u = 0, t = 0;

    for (m = 0; m < jsonData.classes.missions.length ; m++) 
    {
      if(jsonData.classes.missions[m].missionid === this.props.currentMission)
      {
        for (s = 0; s < jsonData.classes.missions[m].strands.length ; s++) 
        {
          if(jsonData.classes.missions[m].strands[s].strandid === this.props.currentStrand)
          {
            for (u = 0; u < jsonData.classes.missions[m].strands[s].units.length ; u++) 
            {
              if(jsonData.classes.missions[m].strands[s].units[u].unitid === this.props.currentUnit)
              {
                for (t = 0; t < jsonData.classes.missions[m].strands[s].units[u].topics.length ; t++) 
                {                  
                  var link = React.DOM.a({
                    key: jsonData.classes.missions[m].strands[s].units[u].topics[t].topicid,
                    className: 'topiclink',
                    href: jsonData.classes.missions[m].strands[s].units[u].topics[t].externalurl,
                    target: "_blank",
                    onClick: this.props.clickHandler.bind(null, jsonData.classes.missions[m].strands[s].units[u].topics[t].topicid)
                  }, jsonData.classes.missions[m].strands[s].units[u].topics[t].topicname);
                  links.push( link );
                  var linkSpacer = React.DOM.br();
                  links.push( linkSpacer);
                  linkSpacer = React.DOM.br();
                  links.push( linkSpacer);
                }
                break;
              }
            }
            break;
          }
        }
        break;
      }
    }
    if(t > 0)
    {
      return (
        <div id="topiclist" className="topics col-lg-12 text-center">
          {links}
        </div>      
      );
    }   
    else
    {
      return (
        <div/>
      );
    }    
  }
}

export default TopicList;