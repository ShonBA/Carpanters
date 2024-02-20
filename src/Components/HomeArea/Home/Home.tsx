import useTitle from "../../../Utils/useTitle";
import AboutUsSection from "../AboutUsSection/AboutUsSection";
import Carousel from "../Carousel/Carousel";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import "./Home.scss";

function Home(): JSX.Element {
    useTitle("Home");

    return (
        <div className="Home">
            <Carousel />
            <AboutUsSection />
            <ProjectsSection />
        </div>
    );
}

export default Home;
