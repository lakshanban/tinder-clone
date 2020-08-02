import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import "./Convo.css"
import {Link} from 'react-router-dom'


function Convo({name, message, profilePic, timestamp}) {

    return (
        <Link to={`/chat/${name}`}>
        <div className="convo">
          <Avatar className="convo__image" alt={name} src={profilePic}/>
       <div className="convo__details">
    <h2>{name}</h2>
    <p>{message}</p>
   
       </div>
       <p className="convo_timestamp">{timestamp}</p>
        </div>
        </Link>
    )
}

export default Convo;