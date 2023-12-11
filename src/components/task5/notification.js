import React from "react";
import '../task5/notification.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

function Notiication(){
    return(
     <>
        <div className="row parentDiv">
            <div className="mx-auto my-auto col-lg-5">
                <h1 className="text-center">Notifications</h1>
                <h5 className="bg-info mb-3 p-2"><FontAwesomeIcon icon={faCircleCheck} /> Information Message</h5>
                <h5 className="bg-success mb-3 p-2"><FontAwesomeIcon icon={faCircleCheck} /> Sucess Message</h5>
                <h5 className="bg-warning mb-3 p-2"><FontAwesomeIcon icon={faBell} /> Warning Message</h5>
                <h5 className="bg-danger mb-3 p-2"><FontAwesomeIcon icon={faCircleExclamation} /> Error Message</h5>
            </div>
        </div>
     </>
    );
}

export default Notiication;