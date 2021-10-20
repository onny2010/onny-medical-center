import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Feature.css';


const Feature = ({ feature }) => {
    const { img, title, description } = feature;
    return (
        <div className="feature-container">
            <Col>
                <Card className="w-100 col-md-4">
                    <img className="w-25 feature-img mx-auto pt-5" src={img} alt="" />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text className="feature-text">{description}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Feature;