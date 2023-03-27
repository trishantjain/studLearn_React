import React, { useState } from 'react'
import Navbar from './Navbar'
import './css/login.css';


function Signup(props) {
    const [credentials, setCredentials] = useState({ name: "", email: "", phone: "", password: "" })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/signup/createuser`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, phone: credentials.phone, password: credentials.password })

        });
        const json = await response.json();
        console.log(json)

        if (json.success) {
            localStorage.setItem('token', json.authToken);
            // history('/');
            props.showAlert("Account created successfully", "success")
        }

        else {
            props.showAlert("Invalid Credentials", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    return (
        <div>
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
                    <p>Don't have an account? <a href="/">Creat Your Account</a> it takes less than a minute</p>
                    <div className="inputs">
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Enter your name" id="name" name='name' value={credentials.name} onChange={onChange} />
                            <br />
                            <input type="email" placeholder="Enter your email" id='email' name='email' value={credentials.email} onChange={onChange} />
                            <br />
                            <input type="number" placeholder="Contact Details" id='phone' name='phone' value={credentials.phone} onChange={onChange} />
                            <br />
                            <input type="password" placeholder="password" id='password' name='password' value={credentials.password} onChange={onChange} />
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
        </div >
    )
}

export default Signup
