//we create a functional component called ChatFeed
import React from "react";

//components
import MessageForm from './MessageForm';
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";


const ChatFeed = (props) => {
    //destructure the props
    const { chats, activeChat, userName, messages} = props;

    //we create a new variable for our chat
    //if chats exists then find our new activeChat
    const chat = chats && chats[activeChat];

    //console.log(chat, userName, messages)

    //we create a new component for rendering messages
    const renderMessages = () => { 
        // we need to fetch all our messages
        //this will takes the keys from our messages and put them right here
        const keys = Object.keys(messages);
        
        // we console.log to see our keys
        // keys are the ids from our specific messages
        //console.log(keys);

        //lets render our messages now
        //we have a callback function

        return keys.map((key, index)=>{
            const message =messages[key];  // we dynamically take the key 
            // if it is our last message
            // if there are any messages we asking then to find the last message
            const lastMessageKey = index === 0 ? null : keys[index -1]
            // how we are going to know if the message is ours?
            const isMyMessage = userName === message.sender.username;
        })

}
renderMessages()

return(
    <div>
        
    </div>
    );
};

export default ChatFeed;