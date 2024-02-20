import RecommendationModel from "../../../../Models/RecommendationModel";
import StarsDisplay from "../StarsDisplay/StarsDisplay";
import "./RecommendationCard.scss";

interface RecommendationProps {
    recommendation: RecommendationModel
};

function RecommendationCard(props: RecommendationProps): JSX.Element {
    return (
        <div className="RecommendationCard">
            <div key={props.recommendation.id} className="recommendation">
                <div className="clientName">{props.recommendation.clientName}</div>
                <div className="rank">
                    <StarsDisplay rank={props.recommendation.rank} />
                </div>
                <div className="comment">{props.recommendation.comment}</div>
            </div>
        </div>
    );
}

export default RecommendationCard;
