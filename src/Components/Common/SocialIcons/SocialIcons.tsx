import { CgMail } from "react-icons/cg";
import { CiFacebook, CiMapPin, CiPhone } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./SocialIcons.scss";

interface SocialIconsProps {
    withText: boolean;
}
function SocialIcons(props: SocialIconsProps): JSX.Element {

    return (
        <div className="SocialIcons">
            <NavLink to={"#"}>
                {props.withText ? <span>חייגו 054824655813</span> : <span></span>}
                <CiPhone />
            </NavLink>
            <NavLink to={"#"}>
                {props.withText ? <span>לשליחת הודעת ווטסאפ</span> : <span></span>}
                <FaWhatsapp />
            </NavLink>
            <NavLink to={"#"}>
                {props.withText ? <span>יסוד המעלה 9, תל-אביב</span> : <span></span>}
                <CiMapPin />
            </NavLink>
            <NavLink to={"#"}>
                {props.withText ? <span>woodwonders@gmail.com</span> : <span></span>}
                <CgMail />
            </NavLink>
            <NavLink to={"#"}>
                {props.withText ? <span>Wood Wonders</span> : <span></span>}
                <CiFacebook />
            </NavLink>
        </div>
    );
}

export default SocialIcons;
