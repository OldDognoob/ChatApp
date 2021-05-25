import React from 'react';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return(
        <ChatEngine
        //we passing different props here to experiment our self how they behave
        //we rendering a new component for the chat feed
            height="100vh"
            projectID="b99c883d-7eb0-4032-bd68-cd964d59ea67"
            userName="maria"
            userSecret="123123"
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        />
    )
}
export default App;