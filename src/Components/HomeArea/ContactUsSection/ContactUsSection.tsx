import { useInView } from "react-intersection-observer";
import ContactUsForm from "../../Common/ContactUsForm/ContactUsForm";
import "./ContactUsSection.scss";

export function ContactUsSection(): JSX.Element {

    const [formRef, formInView] = useInView({ triggerOnce: true });
    
    return (
        <div className={`ContactUsSection ${formInView ? `visible` : ``}`} ref={formRef}>
            <div className="contactSubHeader">
                <h1 className="subHeader">צור קשר</h1>
            </div>
            <ContactUsForm withSocials={true} />
        </div>
    );
}
