import React from 'react'
import "./SidebarChannel.css"
import {useDispatch} from 'react-redux';
import {setChannelInfo} from './features/appSlice'
function SidebarChannel(props) {
    
    const dispatch=useDispatch();

    console.log(props);
    return (
        <div onClick={()=>
        dispatch(
            setChannelInfo({
                channelId:props.id,
                channelName:props.channelName,
        })
        )
        } className='sidebarChannel'>
            <h4><span className='sidebarChannel__hash'>#</span>{props.channelName}</h4>
        </div>
    )
}

export default SidebarChannel
