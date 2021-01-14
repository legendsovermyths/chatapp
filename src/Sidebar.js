import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import Avatar from "@material-ui/core/Avatar";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import Chatroom from "./Chatroom";
import db from "./firebase";

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);
  const addNewChat = () => {
    const name = prompt("Type the name of the room");
    if (name) {
    }
  };

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
          <AddIcon
            onClick={addNewChat}
            className='sidebar__header-option'></AddIcon>
          <DonutLargeIcon className='sidebar__header-option'></DonutLargeIcon>
          <MoreVertIcon className='sidebar__header-option'></MoreVertIcon>
        </div>
      </div>
      <div className='sidebar__body'>
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
        <div className='sidebar__chatrooms'>
          {rooms.map((room) => (
            <Chatroom
              id={room.id}
              key={room.id}
              roomName={room.data.name}
              lastMessage='Fuck Yes!'></Chatroom>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
