import useTitle from "../../../Utils/useTitle";
import Articles from "../../Common/Articles/Articles";
import ContactUsForm from "../../Common/ContactUsForm/ContactUsForm";
import AboutUsSection from "../AboutUsSection/AboutUsSection";
import Carousel from "../Carousel/Carousel";
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
            <Articles />
        </div>
    );
}

export default Home;
