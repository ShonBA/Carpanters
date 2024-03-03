import { useEffect, useState } from "react";
import x from '../../../Assets/Images/backround_image1.jpg';
import RecommendationModel from "../../../Models/RecommendationModel";
import dataService from "../../../Service/DataArea";
import useTitle from "../../../Utils/useTitle";
import RecommendationCard from "../../HomeArea/RecommendationsSection/RecommendationCard/RecommendationCard";
import "./AboutUs.scss";
import ContactUsForm from "../../Common/ContactUsForm/ContactUsForm";

function AboutUs(): JSX.Element {
    useTitle("About Us");


    const [feRecommendationsData, setFeRecommendationsData] = useState<RecommendationModel[]>([]);

    useEffect(() => {
        dataService.getAllRecommendationsData()
            .then(beRecommendationsData => setFeRecommendationsData(beRecommendationsData))
            .catch(err => console.log(err))
    }, []);
    return (
        <div className="AboutUs">
            <div className="aboutUSHeaderContainer">
                <img src={x} />
                <h2>מי אנחנו?</h2>
            </div>
                <div className="aboutUsParagraphContainer">
                    <p>
                        ברוך הבא ל-ווד וונדרס בע"מ, המקום בו האומנות נפגשת עם המצוינות. <br />
                        ב-ווד וונדרס בע"מ אנו שמחים לתת שירותי נגרות מובטחת בידי אומן מנוסה. <br />
                        עם המקצועיות קיימת התחייבות לאיכות, אנו מביאים את חלומות העץ שלך למציאות. <br />
                        צוות האמנים המיומן שלנו משלב טכניקות מסורתיות עם חדשנות מודרנית, יוצר יצירות בלתי רגילות שעומדות במבחן הזמן. <br />
                        בין אם זה רהיט מותאם, עבודת עץ מורכבת או עיצוב אומנותי. <br />
                        מה שהופך אותנו למיוחדים הוא לא רק המימוש שלנו בתחום, אלא גם המחויבות שלנו לספק פתרונות אישיים שעולים על הציפיות. <br />
                        בחרו ב-ווד וונדרס בע"מ עבור אמנות יוצאת דופן ושדרגו את המראה שלכם עם יופי הנצחי של עבודות עץ אישיות. <br />
                    </p>
                </div>
                <div className="recommendationContainer">
                    {feRecommendationsData.map((recommendation) => <RecommendationCard key={recommendation.id} recommendation={recommendation} />)}
                </div>
            <div className="contactUsFrom">
                <ContactUsForm />
            </div>
        </div>
    );
}

export default AboutUs;
