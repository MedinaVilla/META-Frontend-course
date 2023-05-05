import React, { useReducer } from 'react';
import BookingForm from '../components/BookingForm';
import { fetchAPI, submitAPI } from '../utils/API';
import { useNavigate } from "react-router-dom";

import styles from "./../styles/BookingPage.module.css";

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
        <section>
            <div className={styles.hero}>
                <p>Booking a reservation</p>
            </div>
            <div className={styles.box}>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitData={submitData} />
            </div>
        </section>
    );
}

export default BookingPage;
