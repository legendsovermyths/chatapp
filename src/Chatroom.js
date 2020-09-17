import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Chatroom.css";
function Chatroom({ roomName, lastMessage }) {
  return (
    <div className='chatroom'>
      <div className='chatroom__avatar'>
        <Avatar ser='' alt='A'></Avatar>
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
  );
}

export default Chatroom;
