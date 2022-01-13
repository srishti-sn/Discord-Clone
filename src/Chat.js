import React, { useEffect, useState } from 'react'
import ChatHeader from './ChatHeader'
import './Chat.css'
import AddCircleIcon  from '@mui/icons-material/AddCircle'
import  EmojiEmotionsIcon  from '@mui/icons-material/EmojiEmotions'
import  CardGifcardIcon  from '@mui/icons-material/CardGiftcard'
import  GifIcon  from '@mui/icons-material/Gif'
import Message from './Message'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import { selectChannelId, selectChannelName } from './features/appSlice'
import db from './firebase'
import firebase from 'firebase'

function Chat() {
    const user=useSelector(selectUser);
    const channelName=useSelector(selectChannelName);
    const channelId=useSelector(selectChannelId);
    const [input,setInput]=useState('');
    const [messages,setMessages]=useState([]);
        
    useEffect(()=>{
        if(channelId){
            db.collection('channels')
            .doc(channelId)
            .collection('messages')
            .orderBy('timestamp','desc')
            .onSnapshot((snapshot)=>
            setMessages(snapshot.docs.map((doc)=>doc.data())))
        }
    },[channelId])
    
    const sendMessage=(e)=>{
        console.log(channelId);
        e.preventDefault();
        db.collection('channels').doc(channelId).collection('messages').add({
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            message:input,
            user:user,
        })
        setInput('');
    }
    return (
        <div className='chat'>
            <ChatHeader channelName={channelName}/>
            <div className="chat__messages">
                {messages.map((message)=>(
                   <Message user={message.user} message={message.message} timestamp={message.timestamp}/>
    ))}
            </div>
            <div className="chat__input">
                <AddCircleIcon fontSize='large'/>
                <form>
                    <input disabled={!channelId} value={input} onChange={(e)=>setInput(e.target.value)} placeholder={`Message # ${channelName}`}></input>
                    <button type="submit" className='chat__inputButton' onClick={sendMessage}>
                        Send Message
                    </button>
                </form>
                <div className="chat__inputIcons">
                    <CardGifcardIcon fontSize='large'/>
                    <GifIcon fontSize='large'/>
                    <EmojiEmotionsIcon fontSize='large'/>
                </div>
            </div>
        </div>
    )
}

export default Chat
