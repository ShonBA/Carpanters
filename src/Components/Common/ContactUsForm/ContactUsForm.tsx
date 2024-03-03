import { useForm } from '@formspree/react';
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "./ContactUsForm.scss";


function ContactUsForm(): JSX.Element {

    const [state, handleSubmit] = useForm("xnqevpzg");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form onSubmit={handleSubmit} className='ContactUsForm'>
            <div className='form-data'>
                <input type="text" name="Full Name" placeholder='שם מלא' />
                <input type="email" name="Email" placeholder='דוא"ל' />
                <input type="tel" name="Phone" placeholder='טלפון' />
                <button type="submit" disabled={state.submitting}>שלח</button>
            </div>
            <div className='form-content'>
                <h2>דברו איתנו!</h2>
                <p>אנו זמינים עבורכם לכל שאלה. השאירו פרטים ואנו מבטיחים לחזור אליכם תוך 2 ימי עסקים.</p>
            </div>
            <div className='form-icons'>
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
        </form>
    );
}

export default ContactUsForm;
