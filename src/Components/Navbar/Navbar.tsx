import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import appConfig from "../../Utils/appConfig";

function Navbar(): JSX.Element {
    return (
        <div className="Navbar">
            <ul>
                <li><NavLink to={appConfig.HomeRoute}>לוגו</NavLink></li>
                <li><NavLink to={appConfig.HomeRoute}>בית</NavLink></li>
                <li><NavLink to={appConfig.GalleryRoute}>גלריה</NavLink></li>
                <li><NavLink to={appConfig.ProjectsRoute}>פרוייקטים</NavLink></li>
                <li><NavLink to={appConfig.CustomCarpenterRoute}>נגרות בהתאמה אישית</NavLink></li>
                <li><NavLink to={appConfig.AboutRoute}>אודותינו</NavLink></li>
                <li><NavLink to={appConfig.RecommendationRoute}>המלצות</NavLink></li>
                <li><NavLink to={appConfig.ContactUsRoute}>צור קשר</NavLink></li>
            </ul>
        </div >
    );
}

export default Navbar;
