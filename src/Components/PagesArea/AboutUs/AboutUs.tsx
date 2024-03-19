import { useEffect, useState } from "react";
import carpenter1Image from '../../../Assets/Images/carpenter1.png';
import carpenter2Image from '../../../Assets/Images/carpenter2.png';
import carpenter3Image from '../../../Assets/Images/carpenter3.png';
import RecommendationModel from "../../../Models/RecommendationModel";
import dataService from "../../../Service/DataArea";
import useTitle from "../../../Utils/useTitle";
import ContactUsForm from "../../Common/ContactUsForm/ContactUsForm";
import RecommendationCard from "../../HomeArea/RecommendationsSection/RecommendationCard/RecommendationCard";
import "./AboutUs.scss";
import Articles from "../../Common/Articles/Articles";

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
                <h2>מי אנחנו?</h2>
            </div>


            <h1 className="subHeader">אנחנו ווד וונדרס בע"מ, המקום בו האומנות נפגשת עם המצוינות!</h1>


            <div className="gridContainer">
                <img src={carpenter1Image} />
                <p>ב-ווד וונדרס בע"מ אנו שמחים לתת שירותי נגרות מובטחת בידי אומן מנוסה.
                    עם המקצועיות קיימת התחייבות לאיכות, אנו מביאים את חלומות העץ שלך למציאות!
                </p>
                <p>צוות האמנים המיומן שלנו משלב טכניקות מסורתיות עם חדשנות מודרנית, יוצר יצירות בלתי רגילות שעומדות במבחן הזמן. <br />
                    בין אם זה רהיט מותאם, עבודת עץ מורכבת או עיצוב אומנותי. </p>
                <img src={carpenter2Image} />
                <img src={carpenter3Image} />
                <p> מה שהופך אותנו למיוחדים הוא לא רק המימוש שלנו בתחום, אלא גם המחויבות שלנו לספק פתרונות אישיים שעולים על הציפיות. <br />
                    בחרו ב-ווד וונדרס בע"מ עבור אמנות יוצאת דופן ושדרגו את המראה שלכם עם יופי הנצחי של עבודות עץ אישיות!</p>
            </div>

            <div className="parallax"></div>

            <h1 className="subHeader">אל תאמינו לנו, תאמינו להם:</h1>
            <div className="recommendationContainer">
                {feRecommendationsData.map((recommendation) => <RecommendationCard key={recommendation.uuid} recommendation={recommendation} />)}
            </div>
            <h1 className="subHeader">צרו קשר עוד היום ותנו למומחים שלנו לדאוג לכם!</h1>
            <div className="contactUsFrom">
                <ContactUsForm withSocials={true} />
            </div>

            <Articles />
        </div>
    );
}

export default AboutUs;
