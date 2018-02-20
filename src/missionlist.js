import React, { Component } from 'react';

class MissionList extends Component {

   constructor(props) {
      super(props);
		
      this.state = {
         active: 0
      }

   };

  render() {
    var jsonData = this.props.jsondata;
    var classes = [];
    for (var m = 0; m < jsonData.classes.missions.length ; m++){
      //based on the index assign an image to link
      var classimage = "img/cabin.png";
      switch(m) {
        case 1:
            classimage = "img/cake.png";
            break;
        case 2:
            classimage = "img/circus.png";
            break;
        case 3:
            classimage = "img/game.png";
            break;
        case 4:
            classimage = "img/safe.png";
            break;
        case 5:
            classimage = "img/submarine.png";
            break;
        default:
            classimage = "img/cabin.png";
            break;
      } 
      //create the mission links
      var className = jsonData.classes.missions[m].missionid === this.props.active ? "active" : "neutral";
      var fadeitem = React.DOM.i({className:"fa fa-3x"}, jsonData.classes.missions[m].missionname);
      var captioncontentitem = React.DOM.div({className:"caption-content"}, fadeitem);
      var captionitem = React.DOM.div({className:"caption"}, captioncontentitem);
      var imageitem = React.DOM.img({className:"img-thumbnail", alt:jsonData.classes.missions[m].missionname, src: classimage});
      var linkitem = React.DOM.a({key: jsonData.classes.missions[m].missionid, 
                                  className: "portfolio-link", href: this.props.linkto,
                                  onClick: this.props.clickHandler.bind(null, 
                                  jsonData.classes.missions[m].missionid, 
                                  jsonData.classes.missions[m].missionname)},
                                  captionitem, imageitem);
      var classitem = React.DOM.div({className:"col-sm-12 portfolio-item text-center"}, linkitem );
      classes.push( classitem);
    }
    var rowitem = React.DOM.div({className:"row"});
    classes.push(rowitem);

    return (
      <div id="strandtitle">
        {classes}
      </div>      
    );
  }
}

export default MissionList;