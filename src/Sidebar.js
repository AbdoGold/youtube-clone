import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home"/>
            <SidebarRow Icon={WhatshotIcon} title="Trending"/>
            <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions"/>
            <hr/>
            <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
            <SidebarRow Icon={HistoryIcon} title="History"/>
            <SidebarRow Icon={OndemandVideoIcon} title="Your Videos"/>
            <SidebarRow Icon={WatchLaterIcon} title="Wtach Later"/>
            <SidebarRow Icon={ThumbUpIcon} title="Liked Videos"/>
            <hr/>
            <h4>Subscriptions</h4>
            <SidebarRow Icon={LibraryMusicIcon} title="Music"/>
            <SidebarRow Icon={SportsSoccerIcon} title="Sports"/>
            <SidebarRow Icon={VideogameAssetIcon} title="Video Games"/>
            <SidebarRow Icon={AnnouncementIcon} title="News"/>
            <SidebarRow Icon={ExpandMoreIcon} title="Show More"/>
            


        </div>
    )
}

export default Sidebar;
