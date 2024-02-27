import useTitle from "../../../Utils/useTitle";
import ContactUsForm from "../../Common/ContactUsForm/ContactUsForm";
import "./ContactUs.scss";

function ContactUs(): JSX.Element {
    useTitle("Contact Us")
    return (
        <div className="ContactUs">
            <ContactUsForm />
        </div>
    );
}

export default ContactUs;
