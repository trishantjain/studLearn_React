import React from 'react';
// import Navbar from './Navbar';

function Footer() {

    return (
        <>
            <div className='footer-color'>
                <section className="info_section layout_padding2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="info_logo">
                                    <h3>
                                        STUDLEARN
                                    </h3>
                                    <p>
                                        Get Accurate and Instant Results with ChatGPT - Your Reliable AI Language Model."
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="info_links">
                                    <h4>
                                        BASIC LINKS
                                    </h4>
                                    <ul className="  ">
                                        <li className=" ">
                                            <a className="" href="/">Home<span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="">
                                            <a className="" href="/about">About</a>
                                        </li>
                                        <li className="">
                                            <a className="" href="/question">Services</a>
                                        </li>
                                        <li className="">
                                            <a className="" href="/contact">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="info_contact">
                                    <h4>
                                        CONTACT DETAILS
                                    </h4>
                                    <a href="/">
                                        <div className="img-box">
                                            <img src={require('./images/telephone-white.png')} width="12px" alt="Not Found" />
                                        </div>
                                        <p>
                                            +91 7982757222
                                        </p>
                                    </a>
                                    <a href="/">
                                        <div className="img-box">
                                            <img src={require('./images/envelope-white.png')} width="18px" alt="Not found" />
                                        </div>
                                        <p>
                                            trishantjain4444@gmail.com
                                        </p>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="info_form ">
                                    <h4>
                                        NEWSLETTER
                                    </h4>
                                    <form action="">
                                        <input type="email" placeholder="Enter your email" />
                                        <button>
                                            Subscribe
                                        </button>
                                    </form>
                                    <div className="social_box">
                                        <a href="/">
                                            <img src={require("./images/info-fb.png")} alt="Not found" />
                                        </a>
                                        <a href="/">
                                            <img src={require("./images/info-twitter.png")} alt="Not found" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/trishant-jain" target='_blank' rel="noreferrer">
                                            <img src={require("./images/info-linkedin.png")} alt="Not found" />
                                        </a>
                                        <a href="/">
                                            <img src={require("./images/info-youtube.png")} alt="Not found" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container-fluid footer_section">
                    <div className="container">
                        <p>
                            &copy; <span id="displayYear"></span> All Rights Reserved By studlearn
                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Footer
