import useTitle from "../../Utils/useTitle";
import "./Home.css";

function Home(): JSX.Element {
    useTitle("Home");
    return (
        <div className="Home">
			THIS IS Home!!!
        </div>
    );
}

export default Home;
