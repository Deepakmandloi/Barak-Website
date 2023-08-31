import React, { useState } from "react";
import style from "./Contact.module.css";

function Contact() {
    const DisplayFirst = () => {
        const openComplaint = () => {
            setBlock(ComplaintPage);
        };
        return (
            <div className={style.textcontainer}>
                <p className={style.heading}>Contact Us</p>
                <div className={style.contactinfo}>
                    <p>Barak Hostel, IIT Guwahati, Guwahati, Assam 781039</p>
                    <p>0361-258-2789</p>
                    <p>barak_off @ iitg.ac.in</p>
                </div>
                <button
                    className={style.complaintButton}
                    onClick={openComplaint}
                >
                    Give Complaint
                </button>
            </div>
        );
    };

    const ComplaintPage = () => {
        const submitComplaint = () => {
            setBlock(ComplaintSubmit);
        };
        return (
            <div className={style.textcontainer}>
                <p className={style.heading}>Complaint</p>
                <form action="" method="GET">
                    <textarea
                        placeholder="Type your complaint here..."
                        className={style.complaint_input}
                    ></textarea>

                    <button
                        className={style.complaintButton}
                        type="submit"
                        onClick={submitComplaint}
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    };

    const ComplaintSubmit = () => {
        return (
            <div className={style.textcontainer}>
                <p className={style.heading}>Complaint Submitted</p>
                <div className={style.contactinfo}>
                    <p>Your complaint has been submitted successfully.</p>
                </div>
            </div>
        );
    };

    const [display, setBlock] = useState(DisplayFirst);

    return (
        <div className={style.fullcontainer}>
            <div className={style.leftcontainer}></div>
            <div className={style.rightcontainer}>
                <div className={style.blurLayer}></div>
                {display}
            </div>
        </div>
    );
}

export default Contact;
