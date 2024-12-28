'use client';
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { NavLink, useNavigate } from 'react-router-dom'
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

// import GoogleButton from 'react-google-button'
// import { auth, provider } from './Firebase'
// import { signInWithPopup } from 'firebase/auth'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Button, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                StudLearn
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

export default function Signup() {
    let history = useNavigate()

    const [credentials, setCredentials] = useState({ name: "", email: "", phone: "", password: "" })
    const [err, setErr] = useState([])
    // const [googleSign, setGoogleSign] = useState({ g_name: "", g_email: "", g_phone: "" })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const signup_api = process.env.REACT_APP_SIGNUP_API;
        const response = await fetch(signup_api, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, phone: credentials.phone, password: credentials.password })

        });
        const json = await response.json();

        if (json.success) {
            localStorage.setItem('token', json.authToken);
            history('/question');
            console.log("You are successful signup.");
        }

        else {
            setErr(json.errors.map((error) => error.msg));
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if (err.length > 0) {
            const timer = setTimeout(() => {
                setErr((prevAlert) => prevAlert.slice(1)); // Clear all error from the list after 5s
            }, 5000);
            return () => setTimeout(timer) // Cleanup timer on state update
        }
    }, [err])

    // const googleSignup = async () => {
    //     try {
    //         await signInWithPopup(auth, provider).then((data) => {
    //             alert("Successfully Logined...")
    //         })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <>
            <Navbar style={{ backgroundColor: "#041858" }} active5={"active"} />
            <ThemeProvider theme={defaultTheme}>
                <Grid container component="main"
                    sx={{
                        height: '80vh',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                    }}>
                    {/* <CssBaseline /> */}
                    {/* <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    /> */}


                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'right',
                        }}
                    >
                        {err.length > 0 && (
                            err.map((msg, index) => (
                                <Alert key={index} icon={<CheckIcon fontSize="inherit" />} severity="warning">
                                    {msg}
                                </Alert>
                            ))
                        )}
                    </Box>


                    <Grid item xs={12} sm={8} md={5} component={Paper} square 
                    >
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >

                            {/* Alert Box */}
                            {/* <Box
                                sx={{
                                    my: 8,
                                    mx: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'right',
                                }}
                            >
                                {err.length > 0 && (
                                    err.map((msg, index) => (
                                        <Alert key={index} icon={<CheckIcon fontSize="inherit" />} severity="warning">
                                            {msg}
                                        </Alert>
                                    ))
                                )}
                            </Box> */}


                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign Up
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                    value={credentials.name}
                                    onChange={onChange}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="email"
                                    label="Email Address"
                                    type='email'
                                    id="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={credentials.email}
                                    onChange={onChange}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="phone"
                                    label="Phone"
                                    type='tel'
                                    id="phone"
                                    autoComplete="phone"
                                    autoFocus
                                    value={credentials.phone}
                                    onChange={onChange}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={credentials.password}
                                    onChange={onChange}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                {/* <GoogleButton
                                    onClick={googleSignup}>
                                </GoogleButton> */}
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign Up
                                </Button>
                                <Grid container>
                                    {/* <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid> */}
                                    <Grid item>
                                        <NavLink to="/login" variant="body2">
                                            {"Have an account? Login"}
                                        </NavLink>
                                    </Grid>
                                </Grid>
                                <Copyright sx={{ mt: 5 }} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>

    );
}