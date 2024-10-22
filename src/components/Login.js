import React, { useState } from 'react'
import Navbar from './Navbar';
import GoogleButton from 'react-google-button'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { auth, provider } from './Firebase'
import { signInWithPopup } from 'firebase/auth'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid, Typography } from '@mui/material'
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

function Login(props) {
    let history = useNavigate()

    const [credentials, setCredentials] = useState({ email: "", password: "" })


    // Function send the auth token to login to user
    const handleSubmit = async (e) => {
        e.preventDefault();
        const login_api = process.env.REACT_APP_LOGIN_API;
        const response = await fetch(login_api, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();

        if (json.success) {
            localStorage.setItem('token', json.authToken);
            alert("You are successful login.");
            history('/question');
        }

        else {
            alert("You can not login.")
        }
    }

    // Update the credentials.
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const googleSignup = async () => {
        try {
            await signInWithPopup(auth, provider).then((data) => {
                alert("Successfully Logined...")
                history('/question');
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Navbar style={{ backgroundColor: "#041858" }} active4={"active"} />
            <ThemeProvider theme={defaultTheme}>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid
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
                    />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Login
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                {/* <TextField
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
                                /> */}
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
                                {/* <TextField
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
                                /> */}
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
                                <GoogleButton
                                    onClick={googleSignup}>
                                </GoogleButton>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Login
                                </Button>
                                <Grid container>
                                    {/* <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid> */}
                                    <Grid item>
                                        <NavLink to="/signup" variant="body2">
                                            {"Not have account? SignUp"}
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

    )
}

export default Login
