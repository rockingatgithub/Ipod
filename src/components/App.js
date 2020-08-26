import React, { Component } from "react";
import ZingTouch from "zingtouch";
import MenuList from "./MenuList";
import Cover from "./Cover";
import Games from "./Games";
import Settings from "./Settings";
import MusicList from "./MusicList";
import Albums from "./Albums";
import Artists from "./Artists";
import AllSongs from "./AllSongs";

// ==============App component==============================

class App extends Component {
  constructor() {
    super();
    this.state = {
      component: "menulist",
      active: "cover",
      instruct: true,
    };
  }

  componentDidMount() {}

  // ====================handler for menu button============================

  openMenu = () => {
    if (this.state.component !== "menulist") {
      this.setState({
        component: "menulist",
      });
    }
  };

  // ============================entering particular menu===================

  openOnClick = () => {
    this.setState({
      component: this.state.active,
    });
  };

  // =======================detecting rotation effect=============================

  handleClick = () => {
    let context = this;
    let touchArea = document.getElementById("mid");
    let myRegion = new ZingTouch.Region(touchArea);
    myRegion.bind(touchArea, "rotate", function (e) {
      let distance = Math.abs(e.detail.distanceFromOrigin) % 360;
      if (distance >= 0 && distance < 90) {
        context.state.active = "cover";
        if (context.state.component === "menulist") {
          document.getElementById("settings").classList.remove("active");
          document.getElementById("music").classList.remove("active");
          document.getElementById("games").classList.remove("active");
          document.getElementById("cover").classList.add("active");
        } else if (context.state.component === "music") {
          context.state.active = "albums";
          document.getElementById("allsongs").classList.remove("active");
          document.getElementById("artists").classList.remove("active");
          document.getElementById("albums").classList.add("active");
        }
      } else if (distance >= 90 && distance < 180) {
        context.state.active = "music";
        if (context.state.component === "menulist") {
          document.getElementById("settings").classList.remove("active");
          document.getElementById("cover").classList.remove("active");
          document.getElementById("games").classList.remove("active");
          document.getElementById("music").classList.add("active");
        } else if (context.state.component === "music") {
          context.state.active = "artists";
          document.getElementById("allsongs").classList.remove("active");
          document.getElementById("albums").classList.remove("active");
          document.getElementById("artists").classList.add("active");
        }
      } else if (distance >= 180 && distance < 270) {
        context.state.active = "games";
        if (context.state.component === "menulist") {
          document.getElementById("settings").classList.remove("active");
          document.getElementById("cover").classList.remove("active");
          document.getElementById("music").classList.remove("active");
          document.getElementById("games").classList.add("active");
        } else if (context.state.component === "music") {
          context.state.active = "allsongs";
          document.getElementById("artists").classList.remove("active");
          document.getElementById("albums").classList.remove("active");
          document.getElementById("allsongs").classList.add("active");
        }
      } else if (distance >= 270 && distance < 360) {
        context.state.active = "settings";
        if (context.state.component === "menulist") {
          document.getElementById("games").classList.remove("active");
          document.getElementById("cover").classList.remove("active");
          document.getElementById("music").classList.remove("active");
          document.getElementById("settings").classList.add("active");
        } else if (context.state.component === "music") {
          context.state.active = "albums";
          document.getElementById("allsongs").classList.remove("active");
          document.getElementById("artists").classList.remove("active");
          document.getElementById("albums").classList.add("active");
        }
      }
    });
  };

  closeInstruction = () => {
    this.setState({
      instruct: false,
    });
  };

  render() {
    const { component, instruct } = this.state;
    return (
      <div className="App">
        {instruct && (
          <div className="Instruction">
            <img
              onClick={this.closeInstruction}
              src="https://image.flaticon.com/icons/svg/271/271203.svg"
              className="close-btn"
              style={{ height: "12px", width: "12px", marginLeft: "10px" }}
            />
            <ul className="instruc-list">
              <li className="instruc-item">
                <span>
                  Click-hold and rotate in circular area to go options.
                </span>
              </li>
              <li className="instruc-item">
                <span>Click middle button to select option.</span>
              </li>
              <li className="instruc-item">
                <span>Click menu to go back to menulist.</span>
              </li>
            </ul>
          </div>
        )}
        <div className="cover">
          {component === "menulist" && <MenuList />}
          {component === "cover" && <Cover />}
          {component === "music" && <MusicList />}
          {component === "games" && <Games />}
          {component === "settings" && <Settings />}
          {component === "albums" && <Albums />}
          {component === "artists" && <Artists />}
          {component === "allsongs" && <AllSongs />}

          {/* ============== Controls component ============== */}

          <div id="outer">
            <div id="mid" onMouseDown={this.handleClick}>
              <div className="menu-button" onClick={this.openMenu}>
                MENU
              </div>
              <img
                src="https://image.flaticon.com/icons/svg/39/39712.svg"
                id="prev"
                alt="forward"
                height="16px"
                width="16px"
              />
              <div
                id="inner"
                onClick={this.openOnClick}
                draggable="false"
              ></div>
              <img
                src="https://image.flaticon.com/icons/svg/724/724939.svg"
                id="forward"
                alt="previous"
                height="16px"
                width="16px"
              />
              <img
                src="https://image.flaticon.com/icons/svg/27/27185.svg"
                id="play-pause"
                alt="play/pause"
                height="24px"
                width="24px"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
