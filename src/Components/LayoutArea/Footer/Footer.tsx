import { NavLink } from "react-router-dom";
import appConfig from "../../../Utils/appConfig";
import "./Footer.scss";

function Footer(): JSX.Element {
    return (
        <div className="Footer">
            <p>©️ 2024 כל הזכויות שמורות לאלכס ושון</p>
            <div className="footerLinks">
                <NavLink to={appConfig.AboutRoute}>קצת עלינו</NavLink>
                <NavLink to={appConfig.ContactUsRoute}>ליצירת קשר</NavLink>
                {/* Need to make our website hahaha */}
                <NavLink to="#">האתר נבנה ומתוחזק ע"י אלכס וסילנקו ושון בן איון</NavLink>
            </div>
        </div>
    );
}

export default Footer;
