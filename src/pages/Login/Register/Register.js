import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginImg from '../../../images/login.png';

const Register = () => {
    const [loginData, setLoginData] = useState({});
   
    const {user, registerUser, isLoading, authError} = useAuth();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        //Handle input field
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        if(loginData.password !== loginData.password2) {
            alert('Your password did not match')
            return;
        }
        registerUser(loginData.email, loginData.password)
    }
    return (
        <Container>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Typography sx={{ mt: 8 }} variant="body1" gutterBottom>Register</Typography>
                { !isLoading && <form onSubmit={handleLoginSubmit}>
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
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        name="password2"
                        onChange={handleOnChange}
                        type="password"
                        label="Re-Type Password"
                        variant="standard"
                    />
                    <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                    <NavLink style={{textDecoration: 'none'}} to="/login">
                        <Button sx={{ width: '75%', m: 1 }} type="submit"  variant="text">Already Register ? Please Login</Button>
                    </NavLink>
                </form>}
                {isLoading && <CircularProgress />}
                {user?.email && <Alert severity="success">User created successfully</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
            </Grid>
            <Grid item xs={12} md={6}>
                <img src={loginImg} alt="LoginImg" />
            </Grid>
        </Grid>
    </Container>
    )
}

export default Register;
