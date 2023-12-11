import React from "react";
import '../task10/feed';
import '../task10/feedback.css';
import { Link } from "react-router-dom";

function Feedback(){
    return(
        <>
           <div className="bg-col d-flex align-items-center justify-content-center">
            <div className="bg-white w-50 rounded p-5">
                <h1>How Satisfied are you with our customer support Perfomance?</h1>
                <div className="d-flex">
                   <figure>
                <img src="https://previews.123rf.com/images/vecstock/vecstock2002/vecstock200206636/141023653-sad-emoji-face-flat-style-icon-design-cartoon-expression-cute-emoticon-character-profile-facial-toy.jpg" className="immg1 col-3"/>
                <figcaption class="figure-caption col-1 mx-auto"><Link to={'/Feed'}><a href="./feed">SAD</a></Link></figcaption>
                    </figure>
                    <figure>
                <img src="https://i.pinimg.com/474x/42/ae/dc/42aedc7455bdb59c2ff75263a4934682.jpg" className="immg1"/>
                <figcaption class="figure-caption col-1 mx-auto"><Link to={'/Feed'}><a href="./Feed.js">Happy</a></Link></figcaption>
                    </figure>
                    <figure>
                <img src="https://i.pinimg.com/736x/23/83/b8/2383b8c0a126d1d6e45c69e1f1d8c835.jpg" className="immg1 col-2"/>
                <figcaption class="figure-caption col-1 mx-auto"><Link to={'/Feed'}><a href="./Feed.js">None</a></Link></figcaption>
                    </figure>
                </div>
            </div>
        </div>
        </>
    );
}
export default Feedback;