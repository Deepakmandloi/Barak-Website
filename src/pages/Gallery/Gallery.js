import React from "react";
import styles from "./Gallery.module.css";
import { useState } from "react";

const Gallery = () => {
    const Preview = () => {
        const footballGallery = () => {
            setBlock(ViewFootball);
        };
        const cricketGallery = () => {
            setBlock(ViewCricket);
        };
        // const chessGallery = () => {
        //     setBlock(ViewChess);
        // };
        // const musicGallery = () => {
        //     setBlock(ViewMusic);
        // };
        return (
            <div className={styles.preview_container}>
                <div className={styles.img_box} onClick={footballGallery}>
                    <div className={styles.img_preview} id={styles.img1}></div>
                    <div className={styles.img_title}>
                        <span className={styles.img_title_text}>
                            Football Tournament
                        </span>
                        <br></br>
                        <span className={styles.img_title_year}>2022</span>
                    </div>
                    <div className={styles.secondary_title}>
                        <span className={styles.img_title_text}>
                            Football Tournament
                        </span>
                        <br></br>
                        <span className={styles.img_title_year}>2021</span>
                    </div>
                </div>
                <div className={styles.img_box} onClick={cricketGallery}>
                    <div className={styles.img_title}>
                        <span className={styles.img_title_text}>
                            Cricket Tournament
                        </span>
                        <br></br>
                        <span className={styles.img_title_year}>2022</span>
                    </div>
                    <div className={styles.img_preview} id={styles.img2}></div>
                    <div className={styles.secondary_title}>
                        <span className={styles.img_title_text}>
                            Cricket Tournament
                        </span>
                        <br></br>
                        <span className={styles.img_title_year}>2021</span>
                    </div>
                </div>
                {/* <div className={styles.img_box} onClick={chessGallery}>
                    <div className={styles.img_preview} id={styles.img3}></div>
                    <div className={styles.img_title}>
                        <span className={styles.img_title_text}>
                            Chess Tournament
                        </span>
                        <br></br>
                        <span className={styles.img_title_year}>2021</span>
                    </div>
                    <div className={styles.secondary_title}>
                        <span className={styles.img_title_text}>
                            Chess Tournament
                        </span>
                        <br></br>
                        <span className={styles.img_title_year}>2021</span>
                    </div>
                </div>
                <div className={styles.img_box} onClick={musicGallery}>
                    <div className={styles.img_title}>
                        <span className={styles.img_title_text}>
                            Music Competition
                        </span>
                        <br></br>
                        <span className={styles.img_title_year}>2021</span>
                    </div>
                    <div className={styles.img_preview} id={styles.img4}></div>
                    <div className={styles.secondary_title}>
                        <span className={styles.img_title_text}>
                            Music Tournament
                        </span>
                        <br></br>
                        <span className={styles.img_title_year}>2021</span>
                    </div>
                </div> */}
            </div>
        );
    };

    const ViewFootball = () => {
        const backButton = () => {
            setBlock(Preview);
        };
        return (
            <div className={styles.gallery_container}>
                <div className={styles.subheading}>
                    <div className={styles.back_btn} onClick={backButton}></div>
                    Football Tournament-2022
                </div>
                <div className={styles.gallery_content}>
                    <div
                        className={styles.small_images}
                        id={styles.football1}
                    ></div>
                    <div
                        className={styles.small_images}
                        id={styles.football2}
                    ></div>
                    <div
                        className={styles.small_images}
                        id={styles.football3}
                    ></div>
                    <div
                        className={styles.mid_images}
                        id={styles.football4}
                    ></div>
                    <div
                        className={styles.mid_images}
                        id={styles.football5}
                    ></div>
                    <div
                        className={styles.large_images}
                        id={styles.football6}
                    ></div>
                    <div
                        className={styles.large_images}
                        id={styles.football7}
                    ></div>
                </div>
            </div>
        );
    };
    const ViewCricket = () => {
        const backButton = () => {
            setBlock(Preview);
        };
        return (
            <div className={styles.gallery_container}>
                <div className={styles.subheading}>
                    <div className={styles.back_btn} onClick={backButton}></div>
                    Cricket Tournament-2022
                </div>
                <div className={styles.gallery_content}>
                    <div
                        className={styles.small_images}
                        id={styles.cricketi1}
                    ></div>
                    <div
                        className={styles.small_images}
                        id={styles.cricketi2}
                    ></div>
                    <div
                        className={styles.small_images}
                        id={styles.cricketi3}
                    ></div>
                    <div
                        className={styles.mid_images}
                        id={styles.cricketi4}
                    ></div>
                    <div
                        className={styles.mid_images}
                        id={styles.cricketi5}
                    ></div>
                    <div
                        className={styles.large_images}
                        id={styles.cricketi6}
                    ></div>
                </div>
            </div>
        );
    };
    // const ViewChess = () => {
    //     const backButton = () => {
    //         setBlock(Preview);
    //     };
    //     return (
    //         <div className={styles.gallery_container}>
    //             <div className={styles.subheading}>
    //                 <div className={styles.back_btn} onClick={backButton}></div>
    //                 Chess Tournament-2021
    //             </div>
    //             <div className={styles.gallery_content}></div>
    //         </div>
    //     );
    // };
    // const ViewMusic = () => {
    //     const backButton = () => {
    //         setBlock(Preview);
    //     };
    //     return (
    //         <div className={styles.gallery_container}>
    //             <div className={styles.subheading}>
    //                 <div className={styles.back_btn} onClick={backButton}></div>
    //                 Music Competition-2021
    //             </div>
    //             <div className={styles.gallery_content}></div>
    //         </div>
    //     );
    // };

    const [block, setBlock] = useState(Preview);

    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1>Gallery</h1>
            </div>
            {block}
        </div>
    );
};

export default Gallery;
