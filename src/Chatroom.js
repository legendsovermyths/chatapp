import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Chatroom.css";
function Chatroom() {
  return (
    <div className='chatroom'>
      <div className='chatroom__avatar'>
        <Avatar ser='' alt='A'></Avatar>
      </div>
      <div className='chatroom__details'>
        <div className='chatroom__name'>
          <h2>Dance room</h2>
        </div>
        <div className='chatroom__lastmessage'>
          <p>Nice Room!!!</p>
        </div>
      </div>
    </div>
  );
}

export default Chatroom;
