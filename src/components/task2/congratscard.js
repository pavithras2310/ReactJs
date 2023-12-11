import React from "react";
import '../task2/congratscard.css'

export function Congratscards() {
    return (
        <>
            <div className="bgimg container-fluid">
                <h1 className="text-center">Congratscards</h1>
                    <div className="bg-info mx-auto text-center col-lg-4">
                        <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" id="profile" />
                        <p>Vishnu Institute of Computer Education and Technology Bhimavaram</p>
                        <img src=" https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" id="watch" />
                    </div>
            </div> 
        </>
    );
}