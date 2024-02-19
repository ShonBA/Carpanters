import useTitle from "../../Utils/useTitle";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
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
                    <WorkspacePremiumIcon />
                    <h3>איכות</h3>
                    <p>מטבחים מחומרי גלם איכותיים,
                        <br />
                        רמת גימור גבוהה ועיצובים עוצרי נשימה</p>
                </div>
                <div className="qualityCard">
                    <StarBorderPurple500Icon />
                    <h3>חדשנות</h3>
                    <p>
                        ווד ונדרס מביאים לכם את כל החידושים בתחום המטבחים
                    </p>
                </div>
                <div className="qualityCard">
                    <ThumbUpOffAltIcon />
                    <h3>מומחיות</h3>
                    <p>שילוב מנצח בין טכנולוגיות מתקדמות לבין אנשי מקצוע המתמחים בעיצוב מטבחים</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
