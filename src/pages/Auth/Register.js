// import  Axios from "axios";
import React, { useState } from "react";
import register from "./Register.module.css";
import { useContext } from "react";
import { AuthContext } from "../../context";

function Register() {
    const { registerf } = useContext(AuthContext);

    let data = {
        name: "",
        email: "",
        password: "",
        phone: null,
        room: "",
        year: "",
        branch: "",
        course: "",
    };
    const handleChange = (e) => {
        data[e.target.id] = e.target.value;
    };
    // const url='https://barak-site.herokuapp.com/v1/register'
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    
        if(registerf(data)){
               
        }else{
            alert("Please enter correct details");
        
        }
        setdisplay(DisplaySecond);
        //     console.log(data);
        //     Axios.post(url,{
        //         name:data.name,
        //         email:data.email,
        //         password:data.password,
        //         phone:data.phone,
        //         Room:data.Room,
        //         Year:data.Year,
        //         Branch:data.Branch,
        //         Course:data.Course
        //     }).then((res)=>{
        //         console.log(res);
        //         // 1. code redirect to home page using navigate hook
        //     }).catch((err)=>{
        //         console.log(err);
        //         // 2. give alert corresponding to different errors
        //         // 3. set the token in local storage
        //     })
    };

    const DisplayFirst = () => {
        return (
            <div className={register.textcontainer}>
                <p className={register.heading}>Register</p>

                <form
                    className={register.form}
                    // method=""
                    // action=""
                    onSubmit={handleSubmit}
                >
                    <input
                        name="name"
                        className={register.inputbox}
                        type="text"
                        id="name"
                        onChange={(e) => handleChange(e)}
                        placeholder="name"
                        required
                    ></input>
                    <input
                        name="email"
                        className={register.inputbox}
                        type="email"
                        id="email"
                        onChange={(e) => handleChange(e)}
                        placeholder="email"
                        required
                    ></input>
                    <input
                        name="password"
                        className={register.inputbox}
                        type="password"
                        id="password"
                        onChange={(e) => handleChange(e)}
                        placeholder="Password"
                        required
                    ></input>
                    <input
                        type="tel"
                        className={register.inputbox}
                        id="phone"
                        name="phone"
                        onChange={(e) => handleChange(e)}
                        placeholder="Phone number"
                        pattern="[0-9]{10}"
                        required
                    ></input>
                    <input
                        name="roomno"
                        className={register.inputbox}
                        type="text"
                        id="roomno"
                        onChange={(e) => handleChange(e)}
                        placeholder="Room number"
                        required
                    ></input>
                    <input
                        name="year"
                        className={register.inputbox}
                        type="text"
                        id="year"
                        onChange={(e) => handleChange(e)}
                        placeholder="Year"
                        required
                    ></input>
                    <input
                        name="branch"
                        className={register.inputbox}
                        type="text"
                        id="branch"
                        onChange={(e) => handleChange(e)}
                        placeholder="Branch"
                        required
                    ></input>
                    <input
                        name="course"
                        className={register.inputbox}
                        type="text"
                        id="course"
                        onChange={(e) => handleChange(e)}
                        placeholder="course"
                        required
                    ></input>
                    <button type="submit">Register</button>
                </form>
            </div>
        );
    };

    const DisplaySecond = () => {
        return (
            <>
                <p className={register.confirmedup}>Booking confirmed</p>
                <p className={register.confirmeddown}>
                    Your booking confirmation has been sent to your email.
                </p>
            </>
        );
    };

    const [display, setdisplay] = useState(DisplayFirst);

    return (
        <div className={register.fullcontainer}>
            <div className={register.leftcontainer}></div>
            <div className={register.rightcontainer}>{display}</div>
        </div>
    );
}

export default Register;
