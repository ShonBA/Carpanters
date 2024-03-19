import useTitle from "../../../Utils/useTitle";
import ContactUsForm from "../../Common/ContactUsForm/ContactUsForm";
import Map from "../../Common/Map/Map";
import SocialIcons from "../../Common/SocialIcons/SocialIcons";
import "./ContactUs.scss";

function ContactUs(): JSX.Element {
    useTitle("Contact Us")
    return (
        <div className="ContactUs">
            <div className="mapContainer">
                <Map />
                <SocialIcons withText={true} />
            </div>
            <div className="contactContainer">
                <ContactUsForm withSocials={false} />
            </div>
        </div>
    );
}

export default ContactUs;
