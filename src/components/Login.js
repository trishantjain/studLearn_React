import React, { useState } from 'react'
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './css/signup.css';
// trishant --> 'jain@888'
// chetan --> 'psdew@alkd'

function Login(props) {
    let history = useNavigate()

    const [credentials, setCredentials] = useState({ email: "", password: "" })


    // Function send the auth token to login to user
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/auth/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json)

        if (json.success) {
            localStorage.setItem('token', json.authToken);
            history('/question');
            console.log("You are successful login.");
        }

        else {
            console.log("We can not login.")
        }
    }

    // Update the credentials.
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className='body'>
            <Navbar style={{ backgroundColor: "#041858" }} active4={"active"} />
            <div className="box-form my-5">
                <div className="left">
                    <div className="overlay">
                        <h1>Stud Learn</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Curabitur et est sed felis aliquet sollicitudin</p>
                        <span>
                            <p>login with social media</p>
                            <a href="/"><i className="fa fa-google" aria-hidden="true"></i>Login with Google</a>
                            <a href="/"><i className="fa fa-twitter" aria-hidden="true"></i> Login with Twitter</a>
                        </span>
                    </div>
                </div>


                <div className="right">
                    <h5>Login</h5>
                    <p>Don't have an account? <Link to="/signup">Creat Your Account</Link> it takes less than a minute</p>
                    <div className="inputs">
                        <form onSubmit={handleSubmit}>
                            <input type="email" placeholder="Enter your email" id='email' name='email' value={credentials.email} onChange={onChange} required />
                            <br />
                            <input type="password" placeholder="password" id='password' name='password' value={credentials.password} onChange={onChange} required />
                            <button onSuspend={handleSubmit}>Login</button>
                        </form>
                    </div>

                    <br /><br />

                    <div className="remember-me--forget-password">
                        <label>
                            <input type="checkbox" name="item" />
                            <span className="text-checkbox">Remember me</span>
                        </label>
                        <a href='/'>Forget password</a>
                    </div>

                    <br />
                </div>

            </div>
        </div>
    )
}

export default Login
