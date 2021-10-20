import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Doctor.css'

const Doctor = (props) => {
    return (
        <div className="doctor">
            <Col>
                <Card className="doctor">
                    <Card.Img className="doctor-image" variant="top" src={props.doctor.img} />
                    <Card.Body>
                        <Card.Title>{props.doctor.name}</Card.Title>
                        <Card.Text className="service-text">{props.doctor.specialist}</Card.Text>
                        <div className="icons-container d-flex text-center">
                            <div className="d-icon">
                                <FontAwesomeIcon icon={faInstagramSquare} />
                            </div>
                            <div className="d-icon">
                                <FontAwesomeIcon icon={faTwitterSquare} />
                            </div>
                            <div className="d-icon">
                                <FontAwesomeIcon icon={faYoutube} />
                            </div>
                            <div className="d-icon">
                                <FontAwesomeIcon icon={faFacebookSquare} />
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Doctor;