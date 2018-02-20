import React, { Component } from 'react';

class UnitList extends Component {

   constructor(props) {
      super(props);
		
      this.state = {
        active: 0
      }
   };
   
  render() {

    var jsonData = this.props.jsondata;
    var links = [];
    var m = 0, s = 0, u = 0;

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
              var className = jsonData.classes.missions[m].strands[s].units[u].unitid === this.props.active ? "btn btn-lg btn-success btn-active" : "btn btn-lg btn-info";
              var link = React.DOM.a({
                key: jsonData.classes.missions[m].strands[s].units[u].unitid,
                className: className,
                href: this.props.linkto,
                onClick: this.props.clickHandler.bind(null, jsonData.classes.missions[m].strands[s].units[u].unitid)
              }, jsonData.classes.missions[m].strands[s].units[u].unitname);
              links.push( link );
              links.push( React.DOM.span(null, "    "));
              links.push( React.DOM.span(null, "    "));
            }
            break;
          }
        }
        break;
      }
    }
    if(u > 0)
    {
      return (
        <div id="topictitle" className="col-lg-12 text-center">
          {links}
        </div>      
      );
    }
    else{
      return (
        <div/>      
      );
    }
  }
}

export default UnitList;