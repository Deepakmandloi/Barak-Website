import React, { useState } from "react";
import login from "./Login2.module.css";
import { useContext } from "react";
import { AuthContext } from "../../context";
function Login2() {
    const { loginf } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        // prevent from reloading
        e.preventDefault();
        if (email && password) {
            if (loginf(email, password)) {
                console.log("Logged in");
            }
        } else {
            alert("Please fill all the fields");
        }

        // setdisplay(DisplaySecond);
    };
    // const { loginf } = useContext(AuthProvider);

    return (
        <div className={login.fullcontainer}>
            <div className={login.leftcontainer}></div>
            <div className={login.rightcontainer}>
                <div className={login.textcontainer}>
                    <p className={login.heading}>Login</p>

                    <form className={login.form} onSubmit={handleSubmit}>
                        <input
                            name="Email"
                            className={login.inputbox}
                            type="text"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        ></input>
                        <input
                            name="password"
                            className={login.inputbox}
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        ></input>
                        <div className={login.bottom}>
                            <div className={login.remember}>
                                <input
                                    className={login.checkbox}
                                    type="checkbox"
                                    value="#"
                                    id="remember"
                                ></input>
                                <label for="remember">Remember me</label>
                            </div>
                            <div className={login.forgotpass}>
                                <u>Forgot password?</u>
                            </div>
                        </div>
                        <div className={login.redirectRegister}>
                            <a href="/register">
                                Don't have an account? Register here
                            </a>
                        </div>
                        <button
                            type="submit"
                            // onClick={handledefault}
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login2;
