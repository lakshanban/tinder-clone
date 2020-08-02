import React from 'react'
import './Chat.css'
import Convo from './Convo'

function Chat() {
    return (<div className="chat">

        <Convo 
        name="sarah"
        message="Hey how are you"
        timestamp="35 minutes ago"
        profilePic="https://media.nngroup.com/media/people/photos/Headshot7.png.600x600_q75_autocrop_crop-smart_upscale.png"
        />

        <Convo 
        name="Natasha"
        message="Whats up man?"
        timestamp="2hours ago"
        profilePic="https://pbs.twimg.com/profile_images/1281071936605323266/wc1KRZLK_400x400.jpg"
        />

        <Convo 
        name="Katie"
        message="whats going on?"
        timestamp="3 hours ago"
        profilePic="https://pbs.twimg.com/profile_images/1281436888667172868/AnXQMssn_400x400.jpg"
        />

        <Convo 
        name="Nelo"
        message="I love you"
        timestamp="4 hours ago"
        profilePic="https://www.povertyactionlab.org/sites/default/files/styles/hea/public/sarah-kopper_0.jpg?itok=kl5u2Y-K"
        />

    </div>)
}

export default Chat;