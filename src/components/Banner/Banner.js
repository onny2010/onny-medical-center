import React from 'react';
import './Banner.css';


const Banner = () => {
    return (
        <div className="banner-container">

            <div className="row banner">
                <div className="col-md-6">
                    <h3 className="pt-5 mt-5 text-info">NEED A DOCTOR?</h3>
                    <h1 className="title">APPOINTMENT TODAY</h1>
                    <p className="text text-center mt-3">
                        THE PERFECT SERVICE FOR YOU AND  YOUR CHILD WITH THE BEST TREATMENT FROM US
                    </p>
                    <button className="mt-3 about-btn">About us</button>
                </div>
                <div className="col-md-6">
                    {/* <div ></div> */}
                </div>

            </div>
        </div>
    );
};

export default Banner;