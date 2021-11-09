import GoogleIcon from '@mui/icons-material/Google';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginImg from '../../../images/login.png';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        //Handle input field
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history);
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 8 }} variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            name="email"
                            onChange={handleOnChange}
                            label="Your Email"
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            name="password"
                            onChange={handleOnChange}
                            type="password"
                            label="Password"
                            variant="standard"
                        />
                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/register">
                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="text">New User ? Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User created successfully</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <p>-----------------------</p>
                    <Button onClick={handleGoogleSignIn} sx={{ width: '75%', m: 1 }} type="submit" variant="contained"><span style={{marginRight: '20px', lineHeight: '50%'}}><GoogleIcon/></span>Google Sign in</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={loginImg} alt="LoginImg" />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login;
