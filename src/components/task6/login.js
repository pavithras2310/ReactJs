import React from "react";
import '../task6/login.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faUser} from '@fortawesome/free-solid-svg-icons'
function Login(){
    return(
      
        <div className=" maindiv">
            <div className="bgClrSet m-5 p-5 rounded row">
            <div className="col-12 col-md-6">
                <img src="https://media.istockphoto.com/id/470004880/vector/password-computer.jpg?s=612x612&w=0&k=20&c=CTJNXv5p0dwyqAlwwn18mgvZfgd0SjKg9gaSKXtmrN4=" className="w-75"/>
            </div>
            <div className="col-12 col-md-6">
                <h1>Member Login</h1>
                <div className="d-flex"><input type="text" placeholder="Email" className="mt-3 rounded"></input></div><br/>
                <input type="Password" placeholder="***" className="mt-3 rounded" ></input><br/>
                <button className="bg-success mt-3 rounded p-2 ps-5 pe-5 text-light">Login</button>
                <h4 className="text-success mt-3"><span className="text-dark">Forget</span> Username / Password ?</h4>
                <h4 className="text-success mt-3">Create your account-^</h4>
            </div>
            </div>
        </div>
    );
}
export default Login;