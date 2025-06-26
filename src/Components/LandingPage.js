import React, {useState} from "react";
import styles from "./LandingPage.css";
import FrontPageStoreButton from "./StoreLocationButton.js";
import FrontPage from "./FrontPage.js";

function LandingScreen(){
    const [showFrontScreen, setShowFrontScreen] = useState(false);
    
    const ShowFrontButtonOnClick = () => {
        setShowFrontScreen(true);
    };
    if(showFrontScreen){
        return (
            <div>
                <FrontPage/>
            </div>
        );
    }

    return(
        <div className = "landing-screen">
            <button class = "enterApp" id = "enterApp" onClick = {ShowFrontButtonOnClick} style = {{fontSize: "2vw"}}>
                Start Exploring!
            </button>
            <h1 style = {{fontSize: "10vh"}}> 
                Beer Finders
                <p style = {{fontSize: "5vh"}}>
                    Click to Start Exploring!
                </p>
            </h1>
        </div>
    );
} export default LandingScreen;