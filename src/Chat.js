import React from "react";
import "./Chat.css";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import ListIcon from "@material-ui/icons/List";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

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
  const classes = useStyles();
  var avatar = Math.floor(Math.random() * 100);
  let avatar_url = `https://avatars.dicebear.com/api/avataaars/${avatar}.svg`;
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
        <div className='chat__messages'></div>
        <p>This is a text message</p>
      </div>
    </div>
  );
}

export default Chat;
