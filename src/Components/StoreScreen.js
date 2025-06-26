import React, {useState} from "react";
import styles from "./StoreScreen.css";
import FrontPageStoreButton from "./StoreLocationButton.js";

function StoreScreen(){
    const [showStoreScreen, setShowStoreScreen] = useState(false);
    
    const StoreExitButtonOnClick = () => {
        setShowStoreScreen(true);
    };
    if(showStoreScreen){
        return (
            <div>
                <FrontPageStoreButton/>
            </div>
        );
    }

    return(
        <div className = "store-screen">
            <button class = "buttonExit" id = "exitButton" onClick = {StoreExitButtonOnClick} style = {{fontSize: "7vh"}}>
                &times;
            </button>
            <h1 style = {{fontSize: "10vh"}}> 
                Store Name
                <p style = {{fontSize: "5vh"}}>
                    Rating: (Try to replace with an x out of 5 stars visual)
                    <br></br>
                    Beers:
                    <br></br>
                    Address:
                </p>
            </h1>
        </div>
    );
} export default StoreScreen;