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
                <h1 className="subHeader">הלקוחות שלנו: </h1 >
            </div>
            <div className="parallax">
                <div className="recommendationsCardContainer">
                    {feRecommendationsData.map((recommendation) => <RecommendationCard key={recommendation.uuid} recommendation={recommendation} />)}
                </div>
            </div>
        </div>
    );
}

export default RecommendationsSection;
