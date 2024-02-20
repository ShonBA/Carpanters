import useTitle from "../../Utils/useTitle";
import { PiMedalLight } from "react-icons/pi";
import { PiLightbulbFilamentLight } from "react-icons/pi";
import { IoStarOutline } from "react-icons/io5";
import "./Home.scss";

function Home(): JSX.Element {
    useTitle("Home");
    return (
        <div className="Home">
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
                <div className="qualityCard">
                    <PiMedalLight />
                    <h3>איכות</h3>
                    <p>מטבחים מחומרי גלם איכותיים,
                        <br />
                        רמת גימור גבוהה ועיצובים עוצרי נשימה</p>
                </div>
                <div className="qualityCard">
                    <PiLightbulbFilamentLight />
                    <h3>חדשנות</h3>
                    <p>
                        ווד ונדרס מביאים לכם את כל החידושים בתחום המטבחים
                    </p>
                </div>
                <div className="qualityCard">
                    <IoStarOutline />
                    <h3>מומחיות</h3>
                    <p>שילוב מנצח בין טכנולוגיות מתקדמות לבין אנשי מקצוע המתמחים בעיצוב מטבחים</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
