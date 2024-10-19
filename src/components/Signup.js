import React, { useState } from 'react'
import Navbar from './Navbar'
import { NavLink, useNavigate } from 'react-router-dom'
// import GoogleButton from 'react-google-button'
// import { auth, provider } from './Firebase'
// import { signInWithPopup } from 'firebase/auth'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';


// function Signup(props) {

//     return (
//         <div className='body'>
//             <Navbar style={{ backgroundColor: "#041858" }} active5={"active"} />
//             <div className="box-form my-5">
//                 <div className="left">
//                     <div className="overlay">
//                         <h1>Stud Learn</h1>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                             Curabitur et est sed felis aliquet sollicitudin</p>
//                         <span>
//                             <p>login with social media</p>
//                             <GoogleButton onClick={googleSignup} className='google-signin-btn'></GoogleButton>
//                             {/* <a href="/"><i className="fa fa-google" aria-hidden="true"></i>Login with Google</a> */}
//                             {/* <a href="/"><i className="fa fa-twitter" aria-hidden="true"></i> Login with Twitter</a> */}
//                         </span>
//                     </div>
//                 </div>


//                 <div className="right">
//                     <h5>Sign Up</h5>
//                     <div className="inputs">
//                         <form onSubmit={handleSubmit}>
//                             <p className='form-cond' style={{ color: "lightcoral" }}>*Minimum 6 characters</p>
//                             <h4>Name</h4>
//                             <input type="text" placeholder="Enter your name" id="name" name='name' value={credentials.name} onChange={onChange} required />
//                             <br />
//                             <input type="email" placeholder="Enter your email" id='email' name='email' value={credentials.email} onChange={onChange} required />
//                             <br />
//                             <input type="tel" placeholder="Contact Details" id='phone' name='phone' value={credentials.phone} onChange={onChange} required />
//                             <br />
//                             <p className='form-cond' style={{ color: "lightcoral" }}>*Minimum 5 digits</p>
//                             <input type="password" placeholder="Password" id='password' name='password' value={credentials.password} onChange={onChange} required />
//                             <button onSuspend={handleSubmit}>Sign Up</button>
//                         </form>
//                     </div>

//                     <br /><br />

//                     <div className="remember-me--forget-password">
//                         <b>
//                             <Link to='/signup'>Forget password</Link>
//                         </b>
//                     </div>

//                     <br />
//                 </div>

//             </div>
//         </div >
//     )
// }

// export default Signup



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
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     console.log({
    //         email: data.get('email'),
    //         password: data.get('password'),
    //     });
    // };
    let history = useNavigate()

    const [credentials, setCredentials] = useState({ name: "", email: "", phone: "", password: "" })
    // const [googleSign, setGoogleSign] = useState({ g_name: "", g_email: "", g_phone: "" })

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const signup_api = process.env.REACT_APP_SIGNUP_API;
        // console.log(signup_api)
        const response = await fetch(`http://localhost:4000/auth/createuser`, {
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