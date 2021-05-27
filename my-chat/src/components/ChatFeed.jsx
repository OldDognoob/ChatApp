//we create a functional component called ChatFeed
import React from "react";

//components
import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
  //destructure the props
  const { chats, activeChat, userName, messages } = props;

  //we create a new variable for our chat
  //if chats exists then find our new activeChat
  const chat = chats && chats[activeChat];

  //console.log(chat, userName, messages)

  //we create a new component for rendering messages

  const renderReadReceipts = (message, isMyMessage) => chat.people.map((person, index) => person.last_read === message.id && (
    <div
      key={`read_${index}`}
      className="read-receipt"
      style={{
        float: isMyMessage ? 'right' : 'left',
        backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
      }}
    />
  ));

  const renderMessages = () => {
    // we need to fetch all our messages
    //this will takes the keys from our messages and put them right here
    const keys = Object.keys(messages);

    // we console.log to see our keys
    // keys are the ids from our specific messages
    //console.log(keys);

    //lets render our messages now
    //we have a callback function

    return keys.map((key, index) => {
      const message = messages[key]; // we dynamically take the key
      // if it is our last message
      // if there are any messages we asking then to find the last message
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      // how we are going to know if the message is ours?
      const isMyMessage = userName === message.sender.username;
    
  // if is my message then show me my message otherwise if it is not my message show me TheirMessage
  return (
    <div key={`msg_${index}`} style={{ width: '100%' }}>
      <div className="message-block">
        {isMyMessage
          ? <MyMessage message={message} />
          : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />}
      </div>
      <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
      {renderReadReceipts(message, isMyMessage)}
      </div>
    </div>
  );
});
};


if (!chat) return <div />;

return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: '100px' }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;
