import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="about-container">
                <h1 className="py-5 text-dark">About Us</h1>
                <img className="about-img" src="https://i.ibb.co/gZxf0Xf/about-banner.jpg" alt="" />
                <div className="about-body">
                    <h1 className="heading">SPECIAL MEDICAL SERVICES</h1>
                    <p className="details">Special Medical Services, the New Hampshire Title V Program for Children with Special Health Care Needs, administers health programs and services for children ages’ birth to 21 years, who have, or are at risk for, a chronic medical condition, disability or special health care need.

                        Special Medical Services (SMS) provides leadership in building and promoting a community-based system of services that is family centered, comprehensive, coordinated and culturally competent.</p>
                </div>
            </div>
        </div>
    );
};

export default About;