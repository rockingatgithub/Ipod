import React, { Component } from 'react';
import ZingTouch from 'zingtouch';

class App extends Component {
  constructor(){
    super();

  }
  handleClick(){
    console.log('clicked');
    // let ParentTouchArea = document.getElementById('mid');
    let touchArea = document.getElementById('mid');
    let myRegion = new ZingTouch.Region(touchArea);
    myRegion.bind(touchArea, 'rotate', function(e){
      console.log(e.detail.angle);
    })
  }
  render() {
    return (
      <div className="App">
      <div id="outer">
        <div id="mid">
        </div>
        <div className="menu-button">MENU</div>
          <img src="https://image.flaticon.com/icons/svg/39/39712.svg" id="prev" alt="forward" height="16px" width="16px" />
          <div id="inner" onMouseDown={this.handleClick} draggable="false">
          </div>
          <img src="https://image.flaticon.com/icons/svg/724/724939.svg" id="forward" alt="previous" height="16px" width="16px" />
          <img src="https://image.flaticon.com/icons/svg/2404/2404317.svg" id="play-pause" alt="play/pause" height="24px" width="24px" />
      </div>
    </div>
    );
  }
}

export default App;