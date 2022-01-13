import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import {useSelector,useDispatch} from "react-redux";
import {login, logout, selectUser} from './features/userSlice'
import Login from './Login';
import { auth } from './firebase';

function App() {
  const user=useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(login({
          uid:authUser.uid,
          photo:authUser.photoURL,
          email:authUser.email,
          displayName:authUser.displayName
        }))
      }else{
        dispatch(logout());
      }
    })

  },[dispatch])
  
  return (
    <div className="app">
      {user?
     <>
     <Sidebar/>
      <Chat/>
      </>
      :<Login></Login>
      }
    </div>
  );
}

export default App;
