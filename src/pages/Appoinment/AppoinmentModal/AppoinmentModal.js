import { Button } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function AppoinmentModal({ date, booking, openBooking, setBookingSuccess, handleBookingClose }) {
    const { name, time } = booking;

    const { user } = useAuth();
    const initialInfo = { patientName: user.displayName, email: user.email, phone: "" }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }

    const hangleBookingSubmit = (e) => {
        // Call Data
        const appoinment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString(),
            // toDateString
        }
        console.log(appoinment);
        // send to server
        fetch('http://localhost:5000/appoinments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appoinment)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                
                setBookingSuccess(true)
                handleBookingClose();
            }
        });

        e.preventDefault();
        
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        <form onSubmit={hangleBookingSubmit}>
                            <TextField
                                disabled
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                defaultValue={time}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                onBlur={handleOnBlur}
                                name="patientName"
                                defaultValue={user.displayName}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                onBlur={handleOnBlur}
                                name="email"
                                defaultValue={user.email}
                                size="small"
                            />
                            <TextField

                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                onBlur={handleOnBlur}
                                name="phone"
                                defaultValue="Your Phone"
                                size="small"
                            />
                            <TextField
                                disabled
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                defaultValue={date.toDateString()}
                                size="small"
                            />
                            <Button type="submit" sx={{ m: 1 }} variant="contained">Submit</Button>
                        </form>
                    </Typography>
                </Box>
            </Fade>
        </Modal>
    )
}

export default AppoinmentModal;
