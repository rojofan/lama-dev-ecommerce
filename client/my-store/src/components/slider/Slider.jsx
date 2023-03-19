import {EastOutlined, WestOutlined} from "@mui/icons-material";
import "./Slider.scss";
import {useState} from "react";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 4 : (prev) => prev - 1);
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 4 ? 0 : (next) => next + 1);
    };

    const data = [
        "https://images.herzindagi.info/image/2022/Oct/HZ_style_main-liamtra-fashion.jpg",
        "https://static.dezeen.com/uploads/2022/09/1off-paris-amsterdam-fashion-week-dezeen-sq.jpg",
        "https://thumbs.dreamstime.com/b/fashion-pretty-cool-youngwith-shopping-bags-wearing-black-hat-white-pants-over-colorful-orange-background-79063329.jpg",
        "https://media.istockphoto.com/id/1207472153/photo/african-american-woman-in-jacket-with-hands-in-pockets-looking-at-camera-isolated-on-turquoise.jpg?s=612x612&w=0&k=20&c=_qp_Bna-Ek8b9jSPi-B2DnkYJRggo-X3rA_wgziL3VU=",
        "https://www.wgtn.ac.nz/__data/assets/image/0011/1852373/varieties/ls_medium.jpg",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg"
    ];

    return (
        <div className="slider">
            <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw`}}>
                <img src={data[0]} alt=""/>
                <img src={data[1]} alt=""/>
                <img src={data[2]} alt=""/>
                <img src={data[3]} alt=""/>
                <img src={data[4]} alt=""/>
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestOutlined/>
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastOutlined/>
                </div>
            </div>
        </div>
    );
}

export default Slider