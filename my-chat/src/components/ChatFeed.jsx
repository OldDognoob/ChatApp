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

    console.log(chat, userName, messages)

    return(
        <div>
            ChatFeed
        </div>
    );
}

export default ChatFeed;