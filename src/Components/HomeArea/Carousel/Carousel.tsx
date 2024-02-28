import CarouselLib from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bg1 from '../../../Assets/Images/backround_image1.jpg';
import bg2 from '../../../Assets/Images/backround_image2.jpg';
import bg3 from '../../../Assets/Images/backround_image3.jpeg';
import "./Carousel.scss";

function Carousel(): JSX.Element {
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
