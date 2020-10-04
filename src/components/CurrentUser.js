import React, { useState , useEffect} from 'react'
import { fire } from '../config/fire';
import firebase from 'firebase'
import {NavLink, Link} from 'react-router-dom';

function CurrentUser() {
    const [currentUser, setCurrentUser] = useState([]);
    
    useEffect(() => {
        fire.auth().onAuthStateChanged((user) => {
            setCurrentUser(user);
        })
    }, [])
  

    return (
        <div>
            <h1>{currentUser.displayName}</h1>
            
        </div>
    )
}

export default CurrentUser
