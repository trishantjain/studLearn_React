import React from 'react'
import Navbar from './Navbar'
import './css/contact.css'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { AccountCircle, Phone } from '@mui/icons-material';
import { InputAdornment } from '@mui/material'
import Textarea from '@mui/joy/Textarea';

function Contact() {
    return (
        <>
            <Navbar style={{ backgroundColor: "#041858" }} active6={"active"} />
            <div className="container-xxl py-5" id="contact">
                <div className="container py-5 px-lg-5">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 className="text-primary-gradient fw-medium">Contact Us</h5>
                        <h1 className="mb-5 font-link">Get In Touch!</h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="wow fadeInUp" data-wow-delay="0.3s">
                                <Box className="row g-3 user-input-wrp">
                                    <div className="form-floating col-12">
                                        <div className="mb-4">
                                            <TextField
                                                required
                                                fullWidth
                                                id="name"
                                                label="Your Name"
                                                name="name"
                                                className='form-control col-md-6 name mb-4'
                                                autoComplete="name"
                                                size='small'
                                                variant='filled'
                                                autoFocus
                                                sx={{
                                                    paddingRight: "10px"
                                                }}
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position='start'>
                                                            <AccountCircle
                                                                fontSize='small'
                                                            />
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                            <TextField
                                                required
                                                fullWidth
                                                id="phone"
                                                label="Your Email"
                                                name="email"
                                                className='form-control col-md-6 mb-4'
                                                autoComplete="email"
                                                size='small'
                                                variant='filled'
                                                autoFocus
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position='start'>
                                                            <Phone
                                                                fontSize='small'
                                                            />
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <Textarea
                                        className="form-floating col-md-12 mb-5"
                                        placeholder="Type..."
                                        minRows={6}
                                        variant='soft'
                                        sx={{
                                            margin: "15px"
                                        }}

                                    />
                                    <div className="col-12 text-center">
                                        <button className="btn btn-primary-gradient rounded-pill py-3 px-5" type="submit">Send Message</button>
                                    </div>
                                </Box>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

};

export default Contact
