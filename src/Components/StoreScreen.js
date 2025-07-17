import React, {useState, useEffect} from "react";
import styles from "./StoreScreen.css";
import FrontPageStoreButton from "./StoreLocationButton.js";
import StoreDisplayRating from "./RatingSystem/StoreDisplayRating.js";
import {supabase} from "./supabaseClient";

async function calculateRatingAndAddress(storeName, storeID){
    const {data, error} = 
    await supabase
    .from("Stores")
    .select("*")
    .eq("store_name", storeName)
    .eq("id", storeID)
    .single();

    if(error){
        console.log("ERROR in StoreScreen.js");
        return [];
    }
    console.log("Store Data Retrieved Successfully for Rating");
    console.log(data);

    // This data holds the entire row entry of the table. Can access ratings (Stored as Total # of Stars and the total # of Ratings) and address, and any ither info added later

    return data;
}

function StoreScreen({storeName, storeID}){
    const [showStoreScreen, setShowStoreScreen] = useState(false);
    const [numberOfRatings, setNumberOfRatings] = useState(0);
    const [totalRating, setTotalRating] = useState(0);
    const [address, setAddress] = useState("Empty Address");
    const [numberOfBeers, setNumberOfBeers] = useState(0);
    
    const StoreExitButtonOnClick = () => {
        setShowStoreScreen(true);
    };

    useEffect(() => {
        async function retrieveRatingAndAddress(){
            const data = await calculateRatingAndAddress(storeName, storeID);
            setNumberOfRatings(data.num_ratings);
            setAddress(data.store_address);
            setNumberOfBeers(data.num_beers);
            if(data.num_ratings != 0){ // This works since default rating is 0
                setTotalRating(Number(1.0 * data.num_stars) / Number(data.num_ratings));
            }
        }
        retrieveRatingAndAddress();
    }, []);

    if(showStoreScreen){
        return (
            <div>
                <FrontPageStoreButton/>
            </div>
        );
    }
    console.log(totalRating);
    return(
        <div className = "store-screen">
            <button class = "buttonExit" id = "exitButton" onClick = {StoreExitButtonOnClick} style = {{fontSize: "7vh"}}>
                &times;
            </button>
            <h1 style = {{fontSize: "10vh"}}> 
                {storeName}
                <p style = {{fontSize: "5vh"}}>
                    Address: {address}
                    <br></br>
                    Beers: {numberOfBeers}
                    <br></br>
                    Rating (out of {numberOfRatings} Reviews)
                    <br></br>
                </p>
                <StoreDisplayRating rating = {totalRating}/>
            </h1>
        </div>
    );
} export default StoreScreen;