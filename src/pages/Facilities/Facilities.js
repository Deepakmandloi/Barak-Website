import GG from "./Gym.js";
import MM from "./Mess.js";
import TR from "./TvRoom.js";
import SS from "./Stationary.js";
import CC from "./Canteen.js";
const Facilities = () => {
    return (
        <div>
            <div style={{ width: "100%", height: "52px" }}></div>
            <GG />
            <MM />
            <TR />
            <SS />
            <CC />
        </div>
    );
};

export default Facilities;
