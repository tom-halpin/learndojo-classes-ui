import React, { Component } from 'react';

class StrandList extends Component {

   constructor(props) {
      super(props);
		
      this.state = {
        active: 0
      }
   };
   
  render() {

    var jsonData = this.props.jsondata;
    
    var links = [];
    var m = 0, s = 0;

    for (m = 0; m < jsonData.classes.missions.length ; m++) 
    {
      if(jsonData.classes.missions[m].missionid === this.props.currentMission)
      {
        for (s = 0; s < jsonData.classes.missions[m].strands.length ; s++) 
        {
          var className = jsonData.classes.missions[m].strands[s].strandid === this.props.active ? "btn btn-lg btn-success btn-active margin-left:-15px;" : "btn btn-lg btn-info margin-left:-15px;";
          var link = React.DOM.a({
            key: jsonData.classes.missions[m].strands[s].strandid,
            className: className,
            href: this.props.linkto,
            onClick: this.props.clickHandler.bind(null, jsonData.classes.missions[m].strands[s].strandid)
          }, jsonData.classes.missions[m].strands[s].strandname);
          links.push( link );
          links.push( React.DOM.span(null, "    "));
          links.push( React.DOM.span(null, "    "));
          links.push( React.DOM.span(null, "    "));
          links.push( React.DOM.span(null, "    "));          
        }
        break;
      }
    }
    if(s >0)
    {
      return (
        <div id="unittitle" className="col-lg-12 text-center padding-right: 5px padding-left: 5px">
        {links}
        </div>      
      );
    }
    else
    {
      return(
        <div/>
      );

    }
  }
}

export default StrandList;