import Grid from '@mui/material/Grid';
import * as React from 'react';
import Calendar from '../../../Shared/Calendar/Calendar';
import Appoinments from '../Appoinments/Appoinments';

function DashboardHome() {
    const [date, setDate] = React.useState(new Date());
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Calendar date={date} setDate={setDate} />
            </Grid>
            <Grid item xs={12} md={6}>
                <Appoinments date={date} />
            </Grid>
        </Grid>
    )
}

export default DashboardHome
