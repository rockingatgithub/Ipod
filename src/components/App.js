import React, { Component } from 'react';
import ZingTouch from 'zingtouch';
import MenuList from './MenuList';
import Cover from './Cover';
import Music from './Music';
import Games from './Games';
import Settings from './Settings';

class App extends Component {
  constructor(){
    super();
    this.state = {
      component: 'menulist',
      active:''
    }
  }

  openOnClick = () => {
    this.state.component = this.state.active;
    console.log('component is', this.state.component);
  }
  
  handleClick = () => {
    let context = this;
    // console.log('clicked');
    // let ParentTouchArea = document.getElementById('mid');
    let touchArea = document.getElementById('mid');
    let myRegion = new ZingTouch.Region(touchArea);
    myRegion.bind(touchArea, 'rotate', function(e){
      let distance = (Math.abs(e.detail.distanceFromOrigin))%360 ;
      if(distance>=0 && distance<90){
       
        context.state.active = 'cover';
        document.getElementById('settings').classList.remove('active');
        document.getElementById('music').classList.remove('active');
        document.getElementById('games').classList.remove('active');
        document.getElementById('cover').classList.add('active');
      }
      else
      if(distance>=90 && distance<180){
       
        context.state.active = 'music';
        document.getElementById('settings').classList.remove('active');
        document.getElementById('cover').classList.remove('active');
        document.getElementById('games').classList.remove('active');
        document.getElementById('music').classList.add('active');
      }
      else
      if(distance>=180 && distance<270){
        context.state.active = 'games';
        document.getElementById('settings').classList.remove('active');
        document.getElementById('cover').classList.remove('active');
        document.getElementById('music').classList.remove('active');
        document.getElementById('games').classList.add('active');
      }
      else
      if(distance>=270 && distance<360){
        context.state.active = 'settings';
        document.getElementById('games').classList.remove('active');
        document.getElementById('cover').classList.remove('active');
        document.getElementById('music').classList.remove('active');
        document.getElementById('settings').classList.add('active');
      }
      console.log(distance);
    })
  }
  render() {
    const { component } = this.state;
    return (
      <div className="App">
        {(component === 'menulist') && <MenuList/>}
        {(component === 'cover') && <Cover/>}
        {(component === 'music') && <Music/>}
        {(component === 'games') && <Games/>}
        {(component === 'settings') && <Settings/>}
      <div id="outer">
        <div id="mid" onMouseDown={this.handleClick}>
        <div className="menu-button">MENU</div>
          <img src="https://image.flaticon.com/icons/svg/39/39712.svg" id="prev" alt="forward" height="16px" width="16px" />
          <div id="inner" onClick={this.openOnClick} draggable="false">
          </div>
          <img src="https://image.flaticon.com/icons/svg/724/724939.svg" id="forward" alt="previous" height="16px" width="16px" />
          <img src="https://image.flaticon.com/icons/svg/2404/2404317.svg" id="play-pause" alt="play/pause" height="24px" width="24px" />
        </div>
      </div>
    </div>
    );
  }
}

export default App;