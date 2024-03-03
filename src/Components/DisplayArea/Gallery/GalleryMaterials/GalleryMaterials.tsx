import CarouselLib from "react-multi-carousel";
import "./GalleryMaterials.scss";
import MaterialsCard from "./MaterialsCard/MaterialsCard";

function GalleryMaterials(): JSX.Element {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
    const data = [
        {
            "id": 1,
            "name": "אמ די אף (Medium-density fiberboard - MDF)",
            "description": "שכבות דקות של עץ המודבקות בצורה של שתי וערב אחת לשנייה כדי ליצור משטח חזק ועמיד.",
            "imageName": "mdf.jpg"
        },
        {
            "id": 2,
            "name": "סנדוויץ (Plywood)",
            "description": "הוא עץ תעשייתי, חומר נגרות מלאכותי העשוי משאריות נסורת ואבק שיוף, מסיבי תאית, או מעירוב של שניהם, הנותרים לאחר ניסור גזע העץ העיקרי.",
            "imageName": "plywood.jpeg"
        },
        {
            "id": 3,
            "name": "פוֹרְמַייקָה (Formica)",
            "description": "פורמייקה עשויה מנייר קראפט (נייר אריזה) מוספג במלמין נוזלי וכבוש בטמפרטורה גבוהה. הפורמייקה עשויה לרוב שתי שכבות, כאשר שכבת הבסיס היא בצבע חום כהה והשכבה העליונה צבעונית עם מרקם פני שטח מסוגים שונים.",
            "imageName": "laminate.jpg"
        },
        {
            "id": 4,
            "name": "מלמין",
            "description": "זו תרכובת סינטטית שמגיעה בכמה צבעים, והיא נחשבת לאפשרות זולה יחסית. מלמין זה לא לוח העץ עצמו - אשר בדרך כלל יהיה עשוי מסיבית (או בשמה הנכון - שבבית). ",
            "imageName": "melamine.webp"
        },
        {
            "id": 5,
            "name": "פּוֹלִימֶר (Polymer)",
            "description": "הוא חומר העשוי ממולקולות ענק שרשרתיות המורכבות מיחידות חוזרות הקשורות ביניהן בקשרים קוולנטיים, או באמצעות קשרים תוך-מולקולריים חזקים אחרים.",
            "imageName": "polymer.jpeg"
        }
    ]
    return (
        <div className="GalleryMaterials">
            <CarouselLib responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                transitionDuration={1500}
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >

                {data.map(m => <MaterialsCard key={m.id} material={m} />)}

            </CarouselLib>
        </div>
    );
}

export default GalleryMaterials;
