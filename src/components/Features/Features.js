import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Feature from '../Feature/Feature';
import './Features.css';


const Features = () => {
    const [features, setFeatures] = useState([]);

    // using use effect
    useEffect(() => {
        fetch('./featuresFakeData.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])

    return (
        <div className="features-container">
            <h1 className="pt-5">Features</h1>
            <Row sx={1} md={3} className="px-5 g-4">
                {
                    features.map(feature => <Feature
                        key={feature.id}
                        feature={feature}
                    ></Feature>)
                }
            </Row>
        </div>
    );
};

export default Features;