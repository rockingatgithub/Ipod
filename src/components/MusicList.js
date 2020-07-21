import React from 'react';

function MusicList(props) {
    return (
        <div className="menu-block">

            {/* ============Status Bar=========================== */}

            <div className="status bar">
                <span>Apple</span>
                <img className="battery" alt="battery" src="https://image.flaticon.com/icons/svg/3103/3103384.svg" />
            </div>

            {/* ============Menu Box=========================== */}

            <div className="menu-box">
                <h3 id="heading-list">Ipod</h3>
                <ul id="menu-list">
                    <li id="albums" className="list-item">Albums</li>
                    <li id="artists" className="list-item">Artists</li>
                    <li id="allsongs" className="list-item">AllSongs</li>
                </ul>
                <img src="https://img.techpowerup.org/200716/2482539.jpg" id="small-img" alt ="cover" />
                {/* <div id="img-div">
                    <img src="https://img.techpowerup.org/200716/2482539.jpg" id="small-img" />
                </div> */}
            </div>
        </div>
    );
}

export default MusicList;
