import React from "react";
import '../task3/league.css';

export function League() {
    return (
        <>
                <div className="bgSet bg-secondary row">
                    <h1 className="text-center">Super Over League</h1>
                    <div className="text-center w-50 mx-auto">
                        <img className="mx-auto col-12 col-lg-4" src="https://assets.ccbp.in/frontend/react-js/rcb-img.png" />
                        <img className="mx-auto col-12 col-lg-4" src="https://assets.ccbp.in/frontend/react-js/csk-img.png" />
                    </div>
                </div>
        </>
    );
}
