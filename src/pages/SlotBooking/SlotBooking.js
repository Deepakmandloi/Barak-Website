import React, { useState } from "react";
import bookmyitemsstyles from "./BookMyItems.module.css";

function SlotBooking() {
    const handleSubmit = (e) => {
        // e.prevent.default()
        // console.log("reached inside this !!!");
        setdisplay(DisplaySecond);
    };

    const DisplayFirst = () => {
        return (
            <div className={bookmyitemsstyles.textcontainer}>
                <p className={bookmyitemsstyles.heading}>Book your items</p>

                <form
                    className={bookmyitemsstyles.form}
                    method="POST"
                    action=""
                    onSubmit={handleSubmit}
                >
                    <div className={bookmyitemsstyles.datecontainer}>
                        <input
                            name="Date"
                            className={bookmyitemsstyles.inputbox}
                            type="date"
                            placeholder="Select Date"
                            required
                        ></input>
                        <div className={bookmyitemsstyles.calendar}></div>
                    </div>

                    <div className={bookmyitemsstyles.timecontainer}>
                        <input
                            name="time"
                            className={bookmyitemsstyles.inputbox}
                            type="time"
                            placeholder="Select Time"
                            required
                        ></input>
                        <div className={bookmyitemsstyles.time}></div>
                    </div>
                    <input
                        name="Item"
                        className={bookmyitemsstyles.inputbox}
                        type="text"
                        placeholder="Item"
                        required
                    ></input>
                    <br></br>
                    <input
                        name="itemqty"
                        className={bookmyitemsstyles.inputbox}
                        type="number"
                        placeholder="No.of Items"
                        required
                    ></input>
                    <button
                        type="submit"
                        // onClick={handledefault}
                    >
                        Book Equipments
                    </button>
                </form>
            </div>
        );
    };

    const DisplaySecond = () => {
        return (
            <>
                <p className={bookmyitemsstyles.confirmedup}>
                    Booking confirmed
                </p>
                <p className={bookmyitemsstyles.confirmeddown}>
                    Your booking confirmation has been sent to your email.
                </p>
            </>
        );
    };

    const [display, setdisplay] = useState(DisplayFirst);

    return (
        <div className={bookmyitemsstyles.fullcontainer}>
            <div className={bookmyitemsstyles.leftcontainer}></div>
            <div className={bookmyitemsstyles.rightcontainer}>{display}</div>
        </div>
    );
}

export default SlotBooking;
