import "./Footer.scss";

function Footer(): JSX.Element {
    return (
        <div className="Footer">
            <p>All Rights Reserved <span>Wood Wonders</span>©{new Date().getFullYear()}</p>
            <p>האתר פותח ומתוחזק ע"י אלכסנדר וסילנקו ושון בן איון </p>
            <div className="footerLinks">
                {/* <NavLink to={appConfig.AboutRoute}>מי אנחנו</NavLink>
                <NavLink to={appConfig.ContactUsRoute}>צור קשר</NavLink> */}
                {/* Need to make our website hahaha */}
                {/* <NavLink to="#"></NavLink> */}
            </div>
        </div>
    );
}

export default Footer;
