import useTitle from "../../../Utils/useTitle";
import Articles from "../../Common/Articles/Articles";
import "./Recommendations.scss";

function Recommendations(): JSX.Element {
    useTitle("Recommendations");

    return (
        <div className="Recommendations">
            <div className="recommendationsHeaderContainer">
                <h2>לקוחות משתפים</h2>
            </div>

            <Articles />
        </div>
    );
}

export default Recommendations;
