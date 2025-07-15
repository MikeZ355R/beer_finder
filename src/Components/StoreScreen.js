import React, {useState} from "react";
import styles from "./StoreScreen.css";
import FrontPageStoreButton from "./StoreLocationButton.js";
import StoreDisplayRating from "./RatingSystem/StoreDisplayRating.js";

function StoreScreen({storeName}){
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
                {storeName}
                <p style = {{fontSize: "5vh"}}>
                    Address:
                    <br></br>
                    Beers:
                    <br></br>
                    Rating (out of X Reviews)
                    <br></br>
                    <StoreDisplayRating rating = {3.99}/>
                </p>
            </h1>
        </div>
    );
} export default StoreScreen;