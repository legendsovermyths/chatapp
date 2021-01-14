import React, { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import ListIcon from "@material-ui/icons/List";
import Avatar from "@material-ui/core/Avatar";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
import { makeStyles } from "@material-ui/core/styles";
import "./Chat.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));

function Chat() {
  const [input, setInput] = useState("");
  const [avatar_url, setAvatar_url] = useState("");
  const classes = useStyles();

  useEffect(() => {
    var avatar = Math.floor(Math.random() * 100);
    setAvatar_url(`https://avatars.dicebear.com/api/avataaars/${avatar}.svg`);
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("u typed", input);
    setInput("");
  };

  return (
    <div className='chat'>
      <div className='chat__header'>
        <div className='chat__header-right'>
          <div className='chat__header-avatar'>
            <Avatar className={classes.large} src={avatar_url} alt='A'></Avatar>
          </div>
          <div className='chat__header-info'>
            <h2>Dance Room</h2>
            <p>last message on 11:30pm</p>
          </div>
        </div>
        <div className='chat__header-left'>
          <ListIcon className='chat__header-left-option'></ListIcon>
          <SearchSharpIcon className='chat__header-left-option'></SearchSharpIcon>
          <AttachFileIcon className='chat__header-left-option'></AttachFileIcon>
        </div>
      </div>
      <div className='chat__body'>
        <div className='chat__messages'>
          <ChatMessage></ChatMessage>
          <ChatMessage></ChatMessage>
          <ChatMessage></ChatMessage>
          <ChatMessage></ChatMessage>
          <ChatMessage></ChatMessage>
        </div>
        <div className='chat__input-bar'>
          <EmojiEmotionsOutlinedIcon
            style={{ color: "white", padding: "7px" }}
          />
          <form action='submit'>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type='text'
              placeholder='Type a message'
            />
            <button onClick={(e) => sendMessage(e)} type='submit'>
              Send
            </button>
          </form>
          <MicNoneOutlinedIcon style={{ color: "#eeeeee", padding: "7px" }} />
        </div>
      </div>
    </div>
  );
}

export default Chat;
