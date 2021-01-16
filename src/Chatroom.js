import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Chatroom.css";
import { Link } from "react-router-dom";
function Chatroom({ roomName, lastMessage, id }) {
  var avatar = Math.floor(Math.random() * 100);
  let avatar_url = `https://avatars.dicebear.com/api/avataaars/${avatar}.svg`;
  return (
    <Link style={{ textDecoration: "none" }} to={`/rooms/${id}`}>
      <div className='chatroom'>
        <div className='chatroom__avatar'>
          <Avatar src={avatar_url} alt='A'></Avatar>
        </div>
        <div className='chatroom__details'>
          <div className='chatroom__name'>
            <h2>{roomName}</h2>
          </div>
          <div className='chatroom__lastmessage'>
            <p>{lastMessage}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Chatroom;
