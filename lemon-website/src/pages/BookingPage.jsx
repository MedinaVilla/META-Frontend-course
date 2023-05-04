import React, { useEffect, useReducer, useState } from 'react';
import BookingForm from '../components/BookingForm';
import { fetchAPI, submitAPI } from '../utils/API';
import { useNavigate } from "react-router-dom";

const BookingPage = () => {
    const navigate = useNavigate();

    const updateTimes = (availableTimes, date) => {
        const response = fetchAPI(new Date(date));
        return (response.length !== 0) ? response : availableTimes;
    };

    const initializeTimes = initialAvailableTimes =>
        [...initialAvailableTimes, ...fetchAPI(new Date())];

    const [
        availableTimes,
        dispatch
    ] = useReducer(updateTimes, [], initializeTimes);

    const submitData = formData => {
        const response = submitAPI(formData);
        if (response)  navigate("/confirmedBooking");
    };

    return (
        <div>
            <p>Booking Page</p>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitData={submitData} />
        </div>
    );
}

export default BookingPage;
