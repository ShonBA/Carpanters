import { ArticleModel } from "../../../Models/ArticleModel";
import Article from "../../Cards/Article/Article";
import "./Articles.scss";

function Articles(): JSX.Element {
    const articles: ArticleModel[] = [
        new ArticleModel("טיפים לעיצוב הבית: כל המומלצים לשנת 2023", "article1.jpg",
            "עיצוב הבית הוא אחד החלקים המהנים ביותר בכניסה לבית חדש. כשמעצבים את הבית נותנים לו בעצם את הזהות והמגע האישי שלכם, וזה יכול להיות...",
            "https://www.house-design.shop/page/%D7%98%D7%99%D7%A4%D7%99%D7%9D-%D7%9C%D7%A2%D7%99%D7%A6%D7%95%D7%91-%D7%94%D7%91%D7%99%D7%AA"),
        new ArticleModel("טיפים לשמירה על משטחי עץ בבית", "article2.jpg",
            "המאמר הבא עוסק בנושא טיפים לשמירה על משטחי עץ. בין אם זה משטח של האי במטבח, משטח של ארון האמבטיה, דלפק, מדף וכן כל משטח העשוי מעץ מלא....",
            "https://gitush.com/maintaining-wood-surfaces/"),
        new ArticleModel("שילוב עץ בחללי הבית – כיצד לעצב נכון?", "article3.jpg",
            "שילוב של עץ בחללי הבית יכול להשפיע בצורה משמעותית מאוד על המראה של הבית ועל האווירה שתצרו בבית שלכם. מאז ומתמיד העץ...",
            "https://pacifico.co.il/%D7%A9%D7%99%D7%9C%D7%95%D7%91-%D7%A2%D7%A5-%D7%91%D7%97%D7%9C%D7%9C%D7%99-%D7%94%D7%91%D7%99%D7%AA-%D7%9B%D7%99%D7%A6%D7%93-%D7%9C%D7%A2%D7%A6%D7%91-%D7%A0%D7%9B%D7%95%D7%9F/"),
        new ArticleModel("שילוב העץ כחלק מעיצוב הבית ליצירת מראה הרמוני", "article4.jpg",
            "ככלל, עץ משמש את תחום עיצוב הפנים ונחשב כחלק ממנו, הן במסגרת עיצוב חללי בתים פרטיים והן במסגרת עיצוב חללי בתי עסק וכד'. ניתן לשלבאת העץ עם...",
            "https://dira-deal.co.il/wooden-house-design/")
    ]
    return (
        <div className="Articles">
            <h1 className="subHeader">ראו עוד...</h1>
            <div className="articles-content">
                <div className="row-content">
                    {articles.map(a => <Article header={a.header} content={a.content}
                        imageName={a.imageName} redirectPath={a.redirectPath} />)}
                </div>
            </div>
        </div>
    );
}

export default Articles;
