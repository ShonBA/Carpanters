import { NavLink } from "react-router-dom";
import appConfig from "../../../Utils/appConfig";
import logo from "../../../Assets/Images/WoodWonders-logo.png"
import "./Navbar.scss";

function Navbar(): JSX.Element {
    return (
        <div className="Navbar">
            <ul>
                <li><NavLink to={appConfig.HomeRoute} className="navbar-logo"><img src={logo} alt="logo" /></NavLink></li>
                <li><NavLink to={appConfig.HomeRoute}>בית</NavLink></li>
                <li><NavLink to={appConfig.GalleryRoute}>גלריה</NavLink></li>
                <li><NavLink to={appConfig.AboutRoute}>אודותינו</NavLink></li>
                <li><NavLink to={appConfig.RecommendationRoute}>המלצות</NavLink></li>
                <li><NavLink to={appConfig.ContactUsRoute}>צור קשר</NavLink></li>
                <li><NavLink to={appConfig.CustomCarpenterRoute} className="long-text">נגרות בהתאמה אישית</NavLink></li>
            </ul>
        </div >
    );
}

export default Navbar;
