import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);


    // using use effect

    useEffect(() => {
        fetch('./servicesFakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="services-container">
            <h1 className="pb-4">Our Services</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}>

                    </Service>)
                }
            </Row>
        </div>
    );
};

export default Services;