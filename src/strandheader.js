import React, { Component } from 'react';

class StrandHeader extends Component {
  render() {
    return (
    <div className="row">
      <div className="col-lg-12 text-center">
        <hr className="star-primary"/> 
        <h2> {this.props.currentMissionText} Strands </h2>  
      </div>
    </div>
    );
  }
}

export default StrandHeader;