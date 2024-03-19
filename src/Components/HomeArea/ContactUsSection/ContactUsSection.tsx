import ContactUsForm from "../../Common/ContactUsForm/ContactUsForm";
import "./ContactUsSection.scss";

export function ContactUsSection(): JSX.Element {
    return (
        <div className="ContactUsSection">
            <div className="contactSubHeader">
                <h1 className="subHeader">צור קשר</h1>
            </div>
            <ContactUsForm withSocials={true} />
        </div>
    );
}
