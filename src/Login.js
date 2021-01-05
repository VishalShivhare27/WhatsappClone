import React from 'react'
import {Button} from "@material-ui/core"
import {auth,provider} from './firebase';
import './Login.css'
import { actionTypes } from './reducer';
import { useStateValue } from "./StateProvider";

function Login() {

    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type:actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error)=> alert(error.message));
    };

    return (
        <div className="login">
            <div className="login_container">
            <img 
            src="https://cdn2.iconfinder.com/data/icons/2018-social-media-app-logos/1000/2018_social_media_popular_app_logo-whatsapp-512.png"></img>
            <div className="login_text">
                <h3>Sign in to WhatsApp</h3>
            </div>

            <Button  onClick={signIn}>
                Sign in with Google
            </Button>

            </div>
            
        </div>
    )
}

export default Login
