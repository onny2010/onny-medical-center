import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Register : Creater Account</h2>
                <form onSubmit="">
                    <input className="input-field" type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input className="input-field" type="password" name="" id="" placeholder="Enter Your Password" />
                    <br />
                    <input className="input-field" type="password" name="" id="" placeholder="Re-enter Your Password" />
                    <br />
                    <input className="submit-btn" type="submit" value="Submit" />
                </form>
                <p>Already Have an Account ? <Link to="/login">Login</Link></p>
                <div>--------or--------</div>
                <button className="signIn-btn">Google Sing In</button>
            </div>
        </div>
    );
};

export default Register;
