import React from 'react';
import { Link } from 'react-router-dom'

function Navbar(props) {
    
    const Logout = () => {
        let check_login = localStorage.getItem('token');
        if (check_login) {
            localStorage.clear();
            window.location.href = "/login"
        }
    }

    return (
        <header className="header_section">
            <nav className="navbar navbar-expand-lg custom_nav-container sticky-top" style={props.style}>
                <Link className="navbar-brand" to="/index">
                    <span>
                        studlearn
                    </span>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="s-1"> </span>
                    <span className="s-2"> </span>
                    <span className="s-3"> </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                        <ul className="navbar-nav">
                            <li className={`nav-item ${props.active1}`}>
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className={`nav-item ${props.active2}`}>
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className={`nav-item ${props.active3}`}>
                                <Link className="nav-link" to="/question">Ask Question</Link>
                            </li>
                            <li className={`nav-item ${props.active4}`}>
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className={`nav-item ${props.active5}`}>
                                <Link className="nav-link" to="/signup">Signup</Link>
                            </li>
                            <li className={`nav-item ${props.active6}`}>
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="quote_btn-container my-2">
                        <a href="/">
                            <img src="images/call.png" alt="" />
                            <span>
                                Call : + 91 7982757222
                            </span>
                        </a>
                        <form className="form-inline">
                            <Link>
                                <button className="btn nav_search-btn" type="submit" onClick={() => { alert("Search Button Clicked") }}></button>
                            </Link>
                        </form>
                        <button className='btn btn-success mx-2' onClick={Logout}>Logout</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
