import React from "react";
import "./ChatMessage.css";
function ChatMessage() {
  var MessageSender = true;
  return (
    <div>
      {MessageSender && (
        <div className='ChatMessage__sender'>
          <p>legendsovermyths</p>
        </div>
      )}
      <div
        className={
          MessageSender
            ? "ChatMessage__message-sender"
            : "Chat__message-reciever"
        }>
        <p>Hey Guys!</p>
      </div>
    </div>
  );
}

export default ChatMessage;
