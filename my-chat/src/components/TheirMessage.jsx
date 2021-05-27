// for other people message to send
import React from "react";


const TheirMessage = ({ lastMessage, message }) => {
    // we want to know if it is their last message
    // if it is not the last message or the last message is not equal
    // with that we will know by the boolean value if is our last message
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
  
    return (
      <div className="message-row">
        {isFirstMessageByUser && (
          <div
            className="message-avatar"
            style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }} // if this exist then our images will be our avatar
          />
        )}
        {message.attachments && message.attachments.length > 0
        // if it is an attachment we going to see one
          ? (
            <img
              src={message.attachments[0].file}
              alt="message-attachment"
              className="message-image"
              style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
            />
          )
          // otherwise if it is not an attachment 
          : (
            <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
              {message.text}
            </div>
          )}
      </div>
    );
  };
  
  export default TheirMessage;