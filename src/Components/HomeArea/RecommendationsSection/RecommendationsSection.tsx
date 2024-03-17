import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import RecommendationModel from "../../../Models/RecommendationModel";
import dataService from "../../../Service/DataArea";
import RecommendationCard from "./RecommendationCard/RecommendationCard";
import "./RecommendationsSection.scss";

function RecommendationsSection(): JSX.Element {

    const [feRecommendationsData, setFeRecommendationsData] = useState<RecommendationModel[]>([]);
    const [recHeaderRef, recHeaderInView] = useInView({ triggerOnce: true });

    useEffect(() => {
        dataService.getAllRecommendationsData()
            .then(beRecommendationsData => setFeRecommendationsData(beRecommendationsData))
            .catch(err => console.log(err))
    }, []);
    return (
        <div className={`RecommendationsSection ${recHeaderInView ? `visible` : ``}`} ref={recHeaderRef}>
            <div className={`recHeader`} >
                <h2>הלקוחות שלנו: </h2>
            </div>
            <div className="recommendationsList">
                {feRecommendationsData.map((recommendation) => <RecommendationCard key={recommendation.uuid} recommendation={recommendation} />)}
            </div>
        </div>
    );
}

export default RecommendationsSection;
