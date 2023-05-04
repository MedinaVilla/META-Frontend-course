import React, { useState } from 'react';

const BookingForm = ({ availableTimes = [], dispatch, submitData }) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setoOccasion] = useState("Birthday");

    const [errorDate , setErrorDate] = useState();
    const [errorTime , setErrorTime] = useState();
    const [errorGuests , setErrorGuests] = useState();
    const [errorOccasion , setErrorOccasion] = useState();
    
    const onSubmit = () => {
        console.log(date);
         console.log(time)
        if(!date){
            setErrorDate("Choose a date to book");
            return;
        } else setErrorDate();

        if(!time){
            setErrorTime("Choose a time");
            return;
        } else setErrorTime();

        if(!guests){
            setErrorGuests("Enter the number of guests");
            return;
        } else if(guests > 0){
            setErrorGuests("At least 2 guests");
            return;
        } else setErrorGuests();

        if(occasion){
            setErrorOccasion("Choose an option");
            return;
        } else setErrorOccasion();

        submitData({ date, guests, occasion })
    }

    return (
        <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
            <h3>Book Now</h3>
            <label htmlFor="res-date">Choose date</label>
            <input value={date} onChange={(e) => { dispatch(e.target.value); setDate(e.target.value) }} type="date" id="res-date" />
            {errorDate?<p className="errorMessage">{errorDate}</p> : null}
            <label htmlFor="res-time">Choose time</label>
            <select value={time} onChange={(e)=>{setTime(e.target.value)}} id="res-time">
                <option value="">Choose a time</option>
                {
                    availableTimes.map((time) => {
                        return <option key={time} value={time}>{time}</option>
                    })
                }
            </select>
            {errorTime?<p className="errorMessage">{errorTime}</p> : null}

            <label htmlFor="guests">Number of guests</label>
            <input value={guests} onChange={(e) => { setGuests(e.target.value) }} type="number" placeholder="1" min="1" max="10" id="guests" />
            {errorGuests?<p className="errorMessage">{errorGuests}</p> : null}
            
            <label htmlFor="occasion">Occasion</label>
            <select value={occasion} onChange={(e) => { setoOccasion(e.target.value) }} id="occasion">
                <option value={"Birthday"}>Birthday</option>
                <option value={"Anniversary"}>Anniversary</option>
            </select>
            {errorOccasion?<p className="errorMessage">{errorOccasion}</p> : null}


            <input aria-label="On Click" type="button" onClick={onSubmit} value="Make Your reservation" />
        </form>
    );
}

export default BookingForm;
