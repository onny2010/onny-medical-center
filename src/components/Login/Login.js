import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useFirebase();
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input className="input-field" type="email" placeholder="Your Email" />
                    <br />
                    <input className="input-field mb-3" type="password" placeholder="Your Password" name="" id="" />
                    <br />
                    <input className="submit-btn" type="submit" value="Submit" />
                </form>
                <p>New to Onny Medical Center? <Link to="/register">Create Account</Link></p>
                <div>------or------</div>
                <button onClick={signInUsingGoogle} className="signIn-btn">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;