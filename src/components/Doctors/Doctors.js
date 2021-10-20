import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';
import './Doctors.css'

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    // using use Effect
    useEffect(() => {
        fetch('./doctorsFakeData.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])
    return (
        <div className="doctors-container">
            <h1>Our Specialist</h1>
            <p>Some members of Congress are considering significant changes to Medicare that could have a devastating effect on millions of Americans. Proponents call these changes government “negotiation,” but what they are actually proposing is anything but that. </p>
            <Row xs={1} md={4} className="g-4">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </Row>
        </div>
    );
};

export default Doctors;