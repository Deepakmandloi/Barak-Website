import Mess from "./mess.module.css";
import { Link } from "react-router-dom";
const mess = () => {
    return (
        <div className={Mess.content}>
            <h1 className={Mess.header}>Barak Mess</h1>
            <p>
                 We have our own operating Mess, which provides all three meals in a day. 
                 Boarders have access to a variety of food items over a week that keeps their 
                 health and well-being in check and is a delicacy to taste. All the possible loopholes, 
                 such as the food quality deterioration, lack of cleanliness, and some unexpected end-moment menu changes, 
                 are mainly tackled by our elected Mess Convenor and Joint Mess Convenor. Mess feedback is taken at regular 
                 intervals through a form accessible by QR codes pasted at the dining tables for easy access. 
                 Students and other campus residents who aren't Barak boarders can access our Mess by paying a subscription.
            </p>
            <div className={Mess.buton}>
                <div className={Mess.bookButtom}>
                    {" "}
                    <a href="/"> MESS MENU</a>
                </div>
                <div className={Mess.bookButtom}>
                    {" "}
                    <Link to="/"> FEEDBACK</Link>
                </div>
            </div>
        </div>
    );
};

export default mess;
