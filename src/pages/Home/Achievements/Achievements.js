import achieve from "./achieve.module.css";

import image1 from "./image 41.png";
import image2 from "./image 42.png";
import image3 from "./image 47.png";

const Achievements = () => {
    return (
        <div className={achieve.content}>
            <h1>Achievements</h1>

            <div className={achieve.gridContainer}>
                <div className={achieve.wrapper}>
                    <img src={image1} alt="Photo1" height={400} width={600} />
                    <div className={achieve.heading}>
                        General Championship 2020 Winners
                    </div>
                    {/* <div className={achieve.des}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et do.
                    </div> */}
                </div>

                <div className={achieve.wrapper}>
                    <img src={image2} alt="Photo2" height={400} width={600}/>
                    <div className={achieve.heading}>
                       General Championship 2019 Winners
                    </div>
                    {/* <div className={achieve.des}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et do.
                    </div> */}
                </div>
                <div className={achieve.wrapper}>
                    <img src={image3} alt="Photo3" height={400} width={600}/>
                    <div className={achieve.heading}>
                        Inter-IIT winners from Barak 
                    </div>
                    {/* <div className={achieve.des}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et do.
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Achievements;
