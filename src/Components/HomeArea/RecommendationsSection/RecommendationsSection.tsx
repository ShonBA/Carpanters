import RecommendationCard from "./RecommendationCard/RecommendationCard";
import "./RecommendationsSection.scss";

const recommendationsData = [
    {
        id: 1,
        clientName: "נתן כהן",
        rank: 4,
        comment: "שירות מעולה, ממליץ מאוד!",
    },
    {
        id: 2,
        clientName: "יצחק לוי",
        rank: 5,
        comment: "מחיר הוגן, מוצר איכותי ושירות של חבר! רק אצל ווד ונדרס",
    },
    {
        id: 3,
        clientName: "בארט סימפסון",
        rank: 5,
        comment: "מרגיש כמו בבית מלוכה! הצוות הכי מקצועי שנתקלתי בו!",
    },
    {
        id: 4,
        clientName: "דני יצחקי",
        rank: 2,
        comment: "תקעו אותי חודש בזמני אספקה",
    },
];

function RecommendationsSection(): JSX.Element {
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
