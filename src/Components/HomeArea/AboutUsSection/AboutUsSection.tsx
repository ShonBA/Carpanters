import { useEffect, useState } from "react";
import QualityModel from "../../../Models/QualityModel";
import dataService from "../../../Service/DataArea";
import "./AboutUsSection.scss";
import QualityCard from "./QualityCard/QualityCard";
import { useInView } from 'react-intersection-observer';

function AboutUsSection(): JSX.Element {

    const [aboutData, setAboutData] = useState<QualityModel[]>([]);

    const [aboutHeaderRef, aboutHeaderInView] = useInView({ triggerOnce: true });

    useEffect(() => {
        dataService.getAllAboutUsData()
            .then(beAboutUsData => setAboutData(beAboutUsData))
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="AboutUsSection">
            <div className={`homeAboutContainer ${aboutHeaderInView ? `visible` : ``}`} ref={aboutHeaderRef}>
                <h1>ווד ונדרס בע"מ</h1>
                <p>ווד ונדרס הינה חברה ותיקה בעלת ניסיון עשיר של 15 שנים בייצור מטבחים אשר שמה לעצמה למטרה לייצר מטבחים פונקציונליים בעיצוב מעורר השראה,
                    המשלבים טכנולוגיה מתקדמת,
                    תכנון חדשני ורמת גימור גבוהה,
                    כל זאת תחת מעטפת של מקצועיות ושירות לא מתפשר הניתן ללקוח משלב התכנון והרבה לאחר ההתקנה.
                    <br />
                    ווד ונדרס משקיעה משאבים רבים בלמידה מתמדת של המגמות המשתנות בתחום עיצוב וייצור המטבחים על מנת להביא ללקוחותיה תמיד את התוצרים העדכניים ביותר בשילוב האבזור המתקדם ביותר,
                    לחוויית שימוש מושלמת.
                </p>
            </div>
            <div className="qualityCardContainer">
                {aboutData.map(about => <QualityCard key={about.id} quality={about} />)}
            </div>
        </div>
    );
}

export default AboutUsSection;
