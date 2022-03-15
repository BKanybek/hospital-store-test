import React from 'react';
import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './ChatFeed';
import LoginForm from './LoginForm';
import './RealChat.css'

const projectID = '09977868-7dea-4d45-ab35-38b26e1b785e';


const RealChat = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;
    return (
        <div>
               <ChatEngine
                    height="100vh"
                    projectID={projectID}
                    userName={localStorage.getItem('username')}
                    userSecret={localStorage.getItem('password')}
                    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
                    onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
                    />
        </div>
    );
};

export default RealChat;