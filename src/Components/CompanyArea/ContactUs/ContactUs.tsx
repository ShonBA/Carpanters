import useTitle from "../../../Utils/useTitle";
import ContactUsForm from "../../Common/ContactUsForm/ContactUsForm";
import Map from "../../Common/Map/Map";
import SocialIcons from "../../Common/SocialIcons/SocialIcons";
import "./ContactUs.scss";

function ContactUs(): JSX.Element {
    useTitle("Contact Us")
    return (
        <div className="ContactUs">
            <div className="contactContainer">
                <ContactUsForm />
            </div>
            <div className="mapContainer">
                <Map />
                <SocialIcons />
            </div>
        </div>
    );
}

export default ContactUs;
