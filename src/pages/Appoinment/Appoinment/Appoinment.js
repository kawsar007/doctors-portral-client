import React from 'react'
import Navigation from '../../../Shared/Navigation/Navigation'
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader'
import AvailableAppoinment from '../AvailableAppoinment/AvailableAppoinment'

const Appoinment = () => {
    return (
        <div>
            <Navigation/>
            <AppoinmentHeader/>
            <AvailableAppoinment/>
        </div>
    )
}

export default Appoinment;
