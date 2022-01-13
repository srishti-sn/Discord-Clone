import { Button } from '@mui/material'
import React from 'react'
import './Login.css'
import {auth,provider} from './firebase';


function Login() {
const signIn=()=>{
auth.signInWithPopup(provider).catch((error)=>alert(error.message)); 
}
return (
    <div className="login">
        <div className='login-logo'>
            <img
            src='https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/60415153fea4767867265233_Microinfluencers%201140%20wide-64.png'
            />
        </div>
        <Button onClick={signIn}>Login</Button>
    </div>
)
}


export default Login
