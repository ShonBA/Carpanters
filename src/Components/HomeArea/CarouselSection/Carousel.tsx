import CarouselLib from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
            <div className="carouselContainer">
                <CarouselLib
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    transitionDuration={1500}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    <div className="homeCarousel1"></div>
                    <div className="homeCarousel2"></div>
                    <div className="homeCarousel3"></div>
                </CarouselLib>
                <h2>ווד ונדרס בע"מ</h2>
            </div>
        </div >
    );
}

export default Carousel;
