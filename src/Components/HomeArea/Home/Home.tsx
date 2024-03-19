import useTitle from "../../../Utils/useTitle";
import ContactUsForm from "../../Common/ContactUsForm/ContactUsForm";
import AboutUsSection from "../AboutUsSection/AboutUsSection";
import Carousel from "../CarouselSection/Carousel";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import RecommendationsSection from "../RecommendationsSection/RecommendationsSection";
import "./Home.scss";

function Home(): JSX.Element {
    useTitle("Home");

    return (
        <div className="Home">
            <Carousel />
            <AboutUsSection />
            <ProjectsSection />
            <RecommendationsSection />
            <ContactUsForm withSocials={true} />
        </div>
    );
}

export default Home;
