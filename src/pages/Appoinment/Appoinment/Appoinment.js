import React, { useState } from 'react'
import Navigation from '../../../Shared/Navigation/Navigation'
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader'
import AvailableAppoinment from '../AvailableAppoinment/AvailableAppoinment'

const Appoinment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <Navigation/>
            <AppoinmentHeader date={date} setDate={setDate}/>
            <AvailableAppoinment date={date} setDate={setDate}/>
        </div>
    )
}

export default Appoinment;
