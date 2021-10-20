import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const { img, title, description } = props.service;
    return (
        <div className="service-container">
            <Col>
                <Card className="service">
                    <Card.Img className="image" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text className="service-text">{description}</Card.Text>
                        <button className="btn btn-dark">click me</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;