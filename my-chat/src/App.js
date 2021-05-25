import React from 'react';
import {ChatEngine} from 'react-chat-engine';

import './App.css';

const App = () => {
    return(
        <ChatEngine
        //we passing different props here to experiment our self how they behave
            height="100vh"
            projectID="b99c883d-7eb0-4032-bd68-cd964d59ea67"
            userName="maria"
            userSecret="123123"
        />
    )
}
export default App;