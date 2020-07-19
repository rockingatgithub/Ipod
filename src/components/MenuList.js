import React from 'react';

function MenuList(props) {
    return (
        <div className="menu-block">
                <h3 id="heading-list">Ipod</h3>
                <ul id="menu-list">
                    <li id="cover" className="list-item">Cover Flow</li>
                    <li id="music" className="list-item">Music</li>
                    <li id="games" className="list-item">Games</li>
                    <li id="settings" className="list-item">Settings</li>
                </ul>
                <img src="https://img.techpowerup.org/200716/2482539.jpg" id="small-img" />
                {/* <div id="img-div">
                    <img src="https://img.techpowerup.org/200716/2482539.jpg" id="small-img" />
                </div> */}
            </div>
    );
}

export default MenuList;