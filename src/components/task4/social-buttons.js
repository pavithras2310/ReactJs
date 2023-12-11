import React from "react";
import '../task4/social-buttons.css';

function SocialButton() {
    return (
        <>
            <div className="Box row">
                <div className="mx-auto my-auto text-center">
                    <h1>Social Buttons</h1>
                    <input type="button" value="Like" className="btn btn-warning m-3" id="like"></input>
                    <input type="button" value="Comments" className="btn btn-light m-3" id="comments"></input>
                    <input type="button" value="Share" className="btn btn-info m-3" id="share"></input>
                </div>
            </div>
        </>
    );
}

export default SocialButton;