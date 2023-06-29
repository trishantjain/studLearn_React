import React, { useState } from 'react'
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'
import './css/signup.css';


function Signup(props) {
    let history = useNavigate()

    const [credentials, setCredentials] = useState({ name: "", email: "", phone: "", password: "" })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(process.env.REACT_APP_SIGNUP_API, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, phone: credentials.phone, password: credentials.password })

        });
        const json = await response.json();
        console.log(json)
        // setCredentials({ name: "", email: "", phone: "", password: "" });

        if (json.success) {
            localStorage.setItem('token', json.authToken);
            history('/question');
            console.log("You are successful signup.");
        }

        else {
            console.log("We can not signup.")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    return (
        <div className='body'>
            <Navbar style={{ backgroundColor: "#041858" }} active5={"active"} />
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
                    <h5>Sign Up</h5>
                    <div className="inputs">
                        <form onSubmit={handleSubmit}>
                            <p className='form-cond' style={{color: "lightcoral"}}>*Minimum 6 characters</p>
                            <input type="text" placeholder="Enter your name" id="name" name='name' value={credentials.name} onChange={onChange} required />
                            <br />
                            <input type="email" placeholder="Enter your email" id='email' name='email' value={credentials.email} onChange={onChange} required />
                            <br />
                            <input type="tel" placeholder="Contact Details" id='phone' name='phone' value={credentials.phone} onChange={onChange} required />
                            <br />
                            <p className='form-cond' style={{color: "lightcoral"}}>*Minimum 5 digits</p>
                            <input type="password" placeholder="password" id='password' name='password' value={credentials.password} onChange={onChange} required />
                            <button onSuspend={handleSubmit}>Sign Up</button>
                        </form>
                    </div>

                    <br /><br />

                    <div className="remember-me--forget-password">
                        <label>
                            <input type="checkbox" name="item" />
                            <span className="text-checkbox">Remember me</span>
                        </label>
                        <Link to='/'>Forget password</Link>
                    </div>

                    <br />
                </div>

            </div>
        </div >
    )
}

export default Signup
