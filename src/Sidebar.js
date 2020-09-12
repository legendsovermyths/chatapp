import React from "react";
import "./Sidebar.css";
import Avatar from "@material-ui/core/Avatar";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <div className='sidebar__header-avatar'>
          <Avatar
            alt='Remy Sharp'
            src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
          />
        </div>
        <div className='sidebar__header-options'>
          <ChatIcon className='sidebar__header-option'></ChatIcon>
          <DonutLargeIcon className='sidebar__header-option'></DonutLargeIcon>
          <MoreVertIcon className='sidebar__header-option'></MoreVertIcon>
        </div>
      </div>
      <div className='sidebar__search'>
        <SearchIcon className='sidebar__search-icon'></SearchIcon>
        <input
          type='text'
          placeholder='Seach'
          className='sidebar__search-text'
        />
      </div>
      <div>
        <h1>Chatrooms</h1>
      </div>
    </div>
  );
}

export default Sidebar;
