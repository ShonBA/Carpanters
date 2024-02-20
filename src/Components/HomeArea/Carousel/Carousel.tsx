import CarouselLib from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo from '../../../Assets/Images/WoodWonders-logo.png';
import bg1 from '../../../Assets/Images/backround_image1.jpg';
import bg2 from '../../../Assets/Images/backround_image2.jpg';
import bg3 from '../../../Assets/Images/backround_image3.jpeg';
import "./Carousel.scss";
<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
>>>>>>> 99cf6470fad6ef3f1ef647b44524708c25dea26e

function Carousel(): JSX.Element {
    {/* ------- TOP NAVBAR - DECIDE IF DELETE OR KEEP LATER -------*/ }
    // const [logoContainerClassName, setLogoContainerClassName] = useState<string>('logo-container');
    // useEffect(() => {
    //     const x = () => {
    //         const yPos = window.scrollY;
    //         if (yPos === 0) setLogoContainerClassName('logo-container');
    //         if (yPos > 0 && yPos <= 50) setLogoContainerClassName('logo-container v20');
    //         if (yPos > 50 && yPos <= 100) setLogoContainerClassName('logo-container v40');
    //         if (yPos > 100 && yPos <= 150) setLogoContainerClassName('logo-container v60');
    //         if (yPos > 150 && yPos <= 200) setLogoContainerClassName('logo-container v80');
    //         if (yPos > 200) setLogoContainerClassName('logo-container v100');
    //     };
    //     window.addEventListener('scroll', x);
    //     return () => { window.removeEventListener('scroll', x) };
    // }, []);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
    return (
        <div className="Carousel">
            {/* ------- TOP NAVBAR - DECIDE IF DELETE OR KEEP LATER -------*/}
            {/* <div className={logoContainerClassName}>
                <img src={logo} className="logo" />
            </div> */}
            {/* ------- CENTER LOGO - DECIDE IF DELETE OR KEEP LATER -------*/}
            {/* <div className="center-logo-container">
                <img src={logo} className="center-logo" />
            </div> */}
            <CarouselLib
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                transitionDuration={1500}
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                <img src={bg1} />
                <img src={bg2} />
                <img src={bg3} />
            </CarouselLib>
        </div >
    );
}

export default Carousel;
