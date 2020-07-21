import React from 'react';

function MenuList(props) {
    return (
        <div className="menu-block">

            {/* ============Status Bar=========================== */}

            <div className="status bar">
                <span>Apple</span>
                <img className="battery" alt="battery" src="https://image.flaticon.com/icons/svg/3103/3103384.svg" />
            </div>

            {/* ===================Menu Box==================== */}

            <div className="menu-box">
            <h3 id="heading-list">Ipod</h3>
                <ul id="menu-list">
                    <li id="cover" className="list-item">Cover Flow</li>
                    <li id="music" className="list-item">Music</li>
                    <li id="games" className="list-item">Games</li>
                    <li id="settings" className="list-item">Settings</li>
                </ul>
                <img src="https://images.unsplash.com/photo-1515462277126-2dd0c162007a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80" id="small-img" alt ="cover" />
            </div>
        </div>
    );
}

export default MenuList;