import "./AboutUsSection.scss";
import { IoStarOutline } from "react-icons/io5";
import { PiLightbulbFilamentLight, PiMedalLight } from "react-icons/pi";
import QualityCard from "./QualityCard/QualityCard";
import DataArea from "../../../Service/DataArea";

function AboutUsSection(): JSX.Element {
    const aboutData = DataArea.aboutData;
    return (
        <div className="AboutUsSection">
            <div className="homeAboutContainer">
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
