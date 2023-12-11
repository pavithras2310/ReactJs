import React from "react";
import { Link } from "react-router-dom";
import './menu.css';

function Menu() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Moodle Tasks</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to={'/home'}><button class="nav-link btn-decor">HelloWorld</button></Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/congratscard'}><button class="nav-link btn-decor">Congratscard</button></Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/league'}><button class="nav-link btn-decor">League</button></Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/socialbutton'}><button class="nav-link btn-decor">SocialButton</button></Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/notification'}><button class="nav-link btn-decor">Notification</button></Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/login'}><button class="nav-link btn-decor">Login</button></Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/technologycard'}><button class="nav-link btn-decor">Technologie Card</button></Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/add'}><button class="nav-link btn-decor">Add Button</button></Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/fruitcounter'}><button class="nav-link btn-decor">Fruit Counter</button></Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/productincards'}><button class="nav-link btn-decor">ProductInCards</button></Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/jsontask'}><button class="nav-link btn-decor">Json Task</button></Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/feedback'}><button class="nav-link btn-decor">Feedback</button></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Menu;
