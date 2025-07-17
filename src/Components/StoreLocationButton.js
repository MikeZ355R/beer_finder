import React, {useState, useEffect} from "react";
import StoreScreen from "./StoreScreen.js";
import styles from "./StoreLocationButton.css";
import sytles from "./FrontPage.css";
import {supabase} from "./supabaseClient";

async function retrieveStoreData(){ // Retrieves the Data of the Stores
    const {data, error} = 
        await supabase
        .from("Stores")
        .select("id, store_name");
    if(error){
        console.log("ERROR");
        return [];
    }
    console.log("Store Data Retrieved Successfully");
    return data;
}


function FrontPageStoreButton() {
    
    const [showStoreScreen, setShowStoreScreen] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [nameOnButtonClicked, setNameOnButtonClicked] = useState("nameOnButton");
    const [idOnButtonClicked, setIDOnButtonClicked] = useState(0);
    const [storeData, setStoreData] = useState([]);

    const StoreButtonOnClick = (specificButton, specificID) => {
        setNameOnButtonClicked(specificButton);
        setIDOnButtonClicked(specificID);
        setShowStoreScreen(true);
    };

    const SignUpOnClick = () => {
        setShowSignUp(true);
    }

    const LoginOnClick = () => {
        setShowLogin(true);
    }

    useEffect(() => {
        async function getStoreData(){
            const data = await retrieveStoreData();
            setStoreData(data);
        }
        getStoreData()
    }, []);


    if(showStoreScreen){
        return(
            <StoreScreen storeName = {nameOnButtonClicked} storeID = {idOnButtonClicked}/>
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
            </h1>
            <>
                {
                    storeData.map((store) => (
                        <button key = {store.id} className = "buttonForLocations" id = {`StoreNumberButtons-${store.id}`} onClick = {() => StoreButtonOnClick(store.store_name, store.id)}>
                            {store.store_name}
                        </button>
                    ))
                }
            </>
            <button class = "buttonLogin" id = "login" onClick = {LoginOnClick} style = {{fontSize: "2vh"}}>
                Login
            </button>
            <button class = "buttonSignUp" id = "signup" onClick = {SignUpOnClick} style = {{fontSize: "2vh"}}>
                Sign Up
            </button>
        </div>
    );
} 

export default FrontPageStoreButton;