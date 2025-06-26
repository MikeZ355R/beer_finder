import React, {useState} from "react";
import StoreScreen from "./StoreScreen.js";
import styles from "./StoreLocationButton.css";
import sytles from "./FrontPage.css"

function FrontPageStoreButton() {
    
    const [showStoreScreen, setShowStoreScreen] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const StoreButtonOnClick = () => {
        setShowStoreScreen(true);
    };

    const SignUpOnClick = () => {
        setShowSignUp(true);
    }

    const LoginOnClick = () => {
        setShowLogin(true);
    }

    if(showStoreScreen){
        return(
            <StoreScreen/>
        );
    }

    if(showSignUp){
        console.log("SignUp Attempted");
        setShowSignUp(false);
    }

    if(showLogin){
        console.log("Login Attempted");
        setShowLogin(false);
    }

    return (
        <div className = "front-screen">
            <h1 style={{ textAlign: 'left', marginLeft: "1vw", marginTop: "1vh", marginRight: "1vw", marginBottom: "1vh", fontFamily: 'Roboto Mono', fontSize: '64px', color: 'black' }}>
                Beer Finder
                <button class = "buttonForLocations" id = "myButton" onClick = {StoreButtonOnClick}>
                    I'm a button
                </button>
            </h1>
            <button class = "buttonSignUp" id = "signUp" onClick = {SignUpOnClick}  style = {{fontSize: "2vh"}}>
                Sign Up
            </button>
            <button class = "buttonLogin" id = "login" onClick = {LoginOnClick} style = {{fontSize: "2vh"}}>
                Login
            </button>
        </div>
    );
} 

export default FrontPageStoreButton;