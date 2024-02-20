import DataArea from "../../../Service/DataArea";
import RecommendationCard from "./RecommendationCard/RecommendationCard";
import "./RecommendationsSection.scss";

function RecommendationsSection(): JSX.Element {
    const recommendationsData = DataArea.recommendationsData;
    return (
        <div className="RecommendationsSection">
            <div className="recHeader">
                <h2>הלקוחות שלנו: </h2>
            </div>
            <div className="recommendationsList">
                {recommendationsData.map((recommendation) => <RecommendationCard key={recommendation.id} recommendation={recommendation} />)}
            </div>
        </div>
    );
}

export default RecommendationsSection;
