import { NavLink } from "react-router-dom";
import appConfig from "../../../Utils/appConfig";
import logo from "../../../Assets/Images/WoodWonders-logo.png"
import "./Navbar.scss";

function Navbar(): JSX.Element {
    return (
        <div className="Navbar">
            <label className="container">
                <input type="checkbox"/>
                <svg viewBox="0 0 320 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="chevron-right"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path></svg>
            </label>
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
