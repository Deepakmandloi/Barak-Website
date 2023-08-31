import React from "react";
import Slider from "react-slick";
import slideStyle from "./slider.module.css";

import leftAr from "./leftA.svg";
import rightAr from "./rightA.svg";

import kartikverma from "./kartikverma.jpg";
import ShubhamYadav from "./ShubhamYadav.jpg";
import shivarapolu from "./shivarapolu.jpg";
import SiddhantJoshi from "./SiddhantJoshi.jpg";
import DivyanshuTiwari from "./DivyanshuTiwari.jpg";
import SDas from "./SDas.jpeg";
import KunalGoyal from "./KunalGoyal.jpg";
import priteshverma from "./priteshverma.jpg";

// const img1 =
//     "https://images.unsplash.com/photo-1542137722061-efd1cbdf156c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60";
// const img2 =
//     "https://images.unsplash.com/photo-1542500186-6edb30855637?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
// const img3 =
//     "https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60";
// const img4 =
//     "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60";
// const img5 =
//     "https://images.unsplash.com/photo-1649452815098-687edf2fd7fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const images = [
    kartikverma,
    ShubhamYadav,
    shivarapolu,
    SiddhantJoshi,
    DivyanshuTiwari,
    SDas,
    KunalGoyal,
    priteshverma,
];
const post = [
    "General Secretary",
    "Technical Secretary",
    "Joint Technical Secretary",
    "Sports Secretary",
    "Joint Sports Secretary",
    "Joint Cultural Secretary",
    "Joint Mess Convener",
    "Joint Maintainance Secretary",
];
const names = [
    "Kartik Verma",
    "Shubham Yadav",
    "Rapolu Shiva Prasad",
    "Siddhant Joshi",
    "Divyanshu Kumar Tiwari",
    "Shubhradeep Das",
    "Kunal Goyal",
    "Pritesh Kumar Verma",
];

export default function Hmc() {
    function SampleNextArrow({ onClick }) {
        return (
            <div className={slideStyle.arrowRight} onClick={onClick}>
                <img src={rightAr} alt="ram" />
            </div>
        );
    }

    function SamplePrevArrow({ onClick }) {
        return (
            <div className={slideStyle.arrowLeft} onClick={onClick}>
                <img src={leftAr} alt="ram" />
            </div>
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,

        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 648,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };

    return (
        <div>
            <h1 className={slideStyle.title}>HMC Members</h1>
            <Slider {...settings} className={slideStyle.content}>
                {images.map((img, index) => (
                    <div className={slideStyle.slide} key={img}>
                        <img src={img} alt="IMG" />
                        {post[index]}
                        <p>{names[index]}</p>
                    </div>
                ))}{" "}
            </Slider>
        </div>
    );
}
