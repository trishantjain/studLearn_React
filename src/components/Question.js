import React from 'react';
import Navbar from './Navbar';
// import tele_img from './images/TelephoneWhite.png'
// import env_img from './images/EnvelopeWhite.png'
// import images from './images'
// require.context('../images', false, /\.(png|jpe?g|svg)$/)

function Question() {

    function getQuery() {
        alert('Hello!');
    }

    return (
        <>
            <Navbar style={{ backgroundColor: "#041858" }} active3={"active"} />
            <section className="service_section layout_padding">
                <div className="container-fluid">
                    <div className="heading_container">
                        <h2 className="my-4">
                            Ask a Question
                        </h2>
                        <form id="form1">
                            <div className="form-row ">
                                <div className="form-group col-md-12">
                                    <input style={{ width: "1000px" }} type="text" className="form-control" id="query" name="quesQuery" placeholder="Search... " />
                                </div>
                                <button type="submit" className="mx-auto btn btn-success my-2" onClick={getQuery}>Submit</button>
                            </div>
                        </form>
                        <p className=" mx-auto">
                            Expert teachers and 24/7 chatbot assistance, Collaborative, inclusive, and innovative education.
                        </p>
                    </div>
                </div>

                <div id="answer"></div>
                <img id="imgGen" alt='Img generating' />
            </section>
            <div className="sub_page">
                <div className="footer_bg">

                    <section className="contact_section layout_padding" id="contactLink">
                        <div className="container">
                            <div className="heading_container">
                                <h2>
                                    Get In touch
                                </h2>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-8 mx-auto">
                                    <form>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <input type="text" className="form-control" id="inputName4" placeholder="Name " />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email id" />
                                            </div>

                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col">
                                                <input type="text" className="form-control" id="inputSubject4" placeholder="Subject" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="inputMessage" placeholder="Message" />
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button type="submit" className="">Send</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>

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
                                                <a className="" href="index.html">Home<span className="sr-only">(current)</span></a>
                                            </li>
                                            <li className="">
                                                <a className="" href="about.html">About</a>
                                            </li>
                                            <li className="active">
                                                <a className="" href="service.html">Services</a>
                                            </li>
                                            <li className="">
                                                <a className="" href="#contactLink">Contact Us</a>
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
                                            <a href="/">
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
            </div>
        </>
    )
}

export default Question
