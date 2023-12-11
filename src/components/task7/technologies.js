import React from "react";
import '../task7/technologies.css';

function Technologies() {
    return (
        <>
        <h2 className="text-center">Learn 4.0 Technologies</h2>
        <p>Get Started by alumini of IITs and top companies like Amazon, Microsoft, Intel, Nvindia,Qualcomm, etc. Learn directly from professionals involved in Product Development</p>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div className="card border-5 border border-danger" >

                        <div className="card-body card1 " >
                            <h5 class="card-title">Data Scientist</h5>
                            <p class="card-text">Data Scientist gather and analyze large sets of structured and unstructed Data.</p>
                            <img src="https://www.gudusoft.com/wp-content/uploads/2022/04/data_scientists.jpg" className="col-2 float-end " alt="..." />
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-5 border border-info">

                        <div class="card-body  border border-3">
                            <h5 class="card-title">IOT Developer</h5>
                            <p class="card-text">IoT Developer are proessionals who can develop,manage and model IoT devices.</p>
                            <img src="https://sovrin.org/wp-content/uploads/iot-3337536_1920-1536x1059.png" className="col-2 float-end" alt="..." />
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-5 border border-success">

                        <div class="card-body  border border-3">
                            <h5 class="card-title">VR Developer</h5>
                            <p class="card-text">A vit developer create completely new digital enviroment that people can't see</p>
                            <img src="https://contentstatic.techgig.com/thumb/msid-90588086,width-800,resizemode-4/What-does-it-take-to-become-an-AR/VR-Developer.jpg?1054959" className="float-end col-2" alt="..." />
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-5 border border-warning">

                        <div class="card-body  border border-3">
                            <h5 class="card-title">ML Engineer</h5>
                            <p class="card-text">Machine learning engineers find data into mobiles deined by data scientists.</p>
                            <img src="https://images.datacamp.com/image/upload/v1695372958/image2_044441ba91.png" class="float-end col-2" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Technologies;