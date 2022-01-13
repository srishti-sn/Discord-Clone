import React from 'react'
import './ChatHeader.css'
import EditLocationRoundedIcon  from '@mui/icons-material/EditLocationRounded'
import NotificationsIcon  from '@mui/icons-material/Notifications'
import PeopleAltRoundedIcon  from '@mui/icons-material/PeopleAltRounded'
import SearchRoundedIcon  from '@mui/icons-material/SearchRounded'
import SendRoundIcon  from '@mui/icons-material/SendRounded'
import HelpRoundIcon  from '@mui/icons-material/HelpRounded'
import { selectChannelName } from './features/appSlice'
import { useSelector } from 'react-redux'

function ChatHeader({channelName}) {
    const channel=useSelector(selectChannelName);
    return (
        <div className='chatHeader'>
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">
                    #
                    </span>
                    {channelName}
                </h3>
            </div>
            <div className="chatHeader__right">
                <NotificationsIcon/>
                <EditLocationRoundedIcon/>
                <PeopleAltRoundedIcon/>
                <div className='chatHeader__search'>
                    <input placeholder='Search' />
                    <SearchRoundedIcon/>
                </div>
                <SendRoundIcon/>
                <HelpRoundIcon/>
            </div>
            
        </div>
    )
}

export default ChatHeader
