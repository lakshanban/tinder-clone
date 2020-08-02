import React, { useState } from 'react'
import './ChatScreen.css'
import Avatar from '@material-ui/core/Avatar'

function ChaScreen() {
const [input, setInput] = useState('');
const [messages,setMessages] = useState([
    {
        name: 'Ellen',
        image: 'https://www.povertyactionlab.org/sites/default/files/styles/hea/public/sarah-kopper_0.jpg?itok=kl5u2Y-K',
        message: 'How it is going'
    },
    {
        name: 'Ellen',
        image: 'https://www.povertyactionlab.org/sites/default/files/styles/hea/public/sarah-kopper_0.jpg?itok=kl5u2Y-K',
        message: 'whats Up?'
    },
    {
        message: 'How it is going'
    }
])

const onSubmitHandle = (e) => {
    e.preventDefault()
    messages.push({
        message: input
    })
    setMessages([...messages])
    setInput('')
}


    return <div><div className="chatScreen" style={{overflowY:'auto'}}>
        <p>you matched with ellen "2015/12/3"</p>
        {messages.map(message => (
            message.name ?
            (  <div className="chatScreen__message">
                <Avatar 
                className="chatScreen__avatar"
                src={message.image}/>
                <p className="chatScreen__text">{message.message}</p>
            </div  >
             ) :  (
            <div className="chatScreen__message">
                <p className="chatScreen__textUser">{message.message}</p>
            </div>)
        ))
        }

    </div>
    <form className='chatScreen__input' onSubmit={onSubmitHandle}>
    <input placeholder="type a message" value={input}
    type="text" className="chatScreen__inputField"
    onChange={(e)=>{setInput(e.target.value)}}></input>
    <button className="chatScreen__button" type="submit">Send</button>
    </form>
    </div>
}

export default ChaScreen;