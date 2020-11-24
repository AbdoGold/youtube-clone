import React, {useState}  from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
    const [inputSearch, setInputSearch] = useState("");

    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon/>
                <Link to="/">
                    <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png" alt=""/>
                </Link>
            </div>
       

            <div className="header_input">
                <input onChange={e => setInputSearch(e.target.value)}  value={inputSearch}  type="text" placeholder="Search YouTube"/>
                <KeyboardIcon className="header_board"/>

                <Link to={`/search/${inputSearch} `} >
                    <SearchIcon className="header_inputButton"/>
                </Link>
                
            
            </div>

            <div className="header_icons">
                <VideoCallIcon className="header_icon"/>
                <AppsIcon className="header_icon"/>
                <NotificationsIcon className="header_icon"/>
                <Avatar src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png" alt=""/>
            </div>
        </div>
    )
}

export default Header;
