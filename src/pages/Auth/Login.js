import React from "react";
import styles from "./Login.module.css";
import { useState } from "react";

const Login = () => {
    const Base = () => {
        const forgotPassword = () => {
            setBlock(ResetPassword);
        };

        return (
            <div className={styles.form_input}>
                <h1 className={styles.login_heading}>Login</h1>

                <form>
                    <input
                        className={styles.inputbox}
                        type="text"
                        placeholder="Username"
                        required
                    ></input>
                    <br></br>
                    <input
                        className={styles.inputbox}
                        type="password"
                        placeholder="Password"
                        required
                    ></input>
                    <br></br>

                    <div className={styles.options}>
                        <div className={styles.remember}>
                            <input
                                className={styles.checkbox}
                                type="checkbox"
                                value="#"
                                id="remember"
                            ></input>
                            <label for="remember">Remember me</label>
                        </div>

                        <div
                            className={styles.forgotpass}
                            onClick={forgotPassword}
                        >
                            <u>Forgot password?</u>
                        </div>
                    </div>

                    <br></br>

                    <button type="submit">Login</button>
                </form>
            </div>
        );
    };

    const ResetPassword = () => {
        const bkBtn = () => {
            setBlock(Base);
        };
        return (
            <div className={styles.form_input}>
                <div className={styles.rst_pwd_top}>
                    <div className={styles.rst_pwd_heading}>
                        <h1>
                            <div
                                className={styles.backArrow}
                                onClick={bkBtn}
                            ></div>
                            Reset Password
                        </h1>
                    </div>
                </div>

                <input
                    className={styles.inputbox}
                    type="email"
                    placeholder="E-Mail"
                    required
                ></input>
                <button className={styles.btn_rst_link}>Send Reset Link</button>
            </div>
        );
    };

    const [block, setBlock] = useState(Base);

    return (
        <div className={styles.container}>
            <div className={styles.auth_card}>
                <div className={styles.img}></div>

                {block}
            </div>
        </div>
    );
};

export default Login;
