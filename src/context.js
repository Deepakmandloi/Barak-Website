import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [user, setUser] = useState({});
    const link = "https://barak-site.herokuapp.com/user/";

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginf = (email, password) => {
        fetch(link + "login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
            .then((response) => response.json())
            .then((res) => {
                console.log(res);
                if (res.success) {
                    setUser(res.data);
                    setIsLoggedIn(true);
                    return true;
                } else {
                    console.log("failedx");
                    return false;
                }
            })
            .catch((e) => {
                console.log(e);
                return false;
            });
    };

    const registerf = (data) => {
        const { name, email, password, phone, room, year, branch, course } = data;
        fetch(link + "register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone: phone,
                room: room,
                year: year,
                branch: branch,
                course: course,
            }),
        }).then((response) => response.json())
            .then((res) => {
                console.log(res);
                if (res.success) {
                    setUser(res.data.user);
                    setIsLoggedIn(true);
                    return true;
                } else {
                   
                    return false;
                }
            }
            )
            .catch((e) => {
                console.log(e);
                return false;
            }
            );
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                user,
                setIsLoggedIn,
                setUser,
                loginf,
                registerf,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};
