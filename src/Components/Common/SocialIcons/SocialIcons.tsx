import { CiInstagram, CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./SocialIcons.scss";

function SocialIcons(): JSX.Element {
    return (
        <div className="SocialIcons">
            <NavLink to={"#"}>
                <FaWhatsapp />
            </NavLink>
            <NavLink to={"#"}>
                <CiInstagram />
            </NavLink>
            <NavLink to={"#"}>
                <CiFacebook />
            </NavLink>
        </div>
    );
}

export default SocialIcons;
