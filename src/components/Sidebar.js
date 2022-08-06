import React from 'react';
import './Sidebar.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import SidebarRow from './SidebarRow';
function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow selected Icon={HomeOutlinedIcon} title="Home" />
            <SidebarRow Icon={ExploreOutlinedIcon} title="Explore" />
            <SidebarRow Icon={SubscriptionsOutlinedIcon} title="Subscription" />
            <hr />
            {/* <SidebarRow Icon={WhatshotOutlinedIcon} title="Trending"/> */}
            <SidebarRow Icon={VideoLibraryOutlinedIcon} title="Library" />
            <SidebarRow Icon={HistoryOutlinedIcon} title="History" />
            <SidebarRow Icon={OndemandVideoOutlinedIcon} title="Your videos" />
            <SidebarRow Icon={WatchLaterOutlinedIcon} title="Watch Later" />
            <SidebarRow Icon={ThumbUpOutlinedIcon} title="Liked videos" />
            <hr />
            <h3>SUBSCRIPTION</h3>



        </div>
    )
}

export default Sidebar
