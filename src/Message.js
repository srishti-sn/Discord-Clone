import { Avatar } from '@mui/material'
import React from 'react'
import userSlice from './features/userSlice'
import './Message.css'

function Message(props) {
    return (
        <div className='message'>
            <Avatar src={props.user.photo}/>
            <div className="message__info">
                <h4>{props.user.displayName}
                    <span className='message__timestamp'>
                       {new Date(props.timestamp?.toDate()).toUTCString()}
                    </span>
                </h4>
                <p>{props.message}</p>
            </div>
        </div>
    )
}

export default Message
