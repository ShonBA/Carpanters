import { useForm } from '@formspree/react';
import { useInView } from 'react-intersection-observer';
import SocialIcons from '../SocialIcons/SocialIcons';
import "./ContactUsForm.scss";

interface SocialIconsProps {
    withSocials: boolean;
}
function ContactUsForm(props: SocialIconsProps): JSX.Element {

    const [formRef, formInView] = useInView({ triggerOnce: true });

    const [state, handleSubmit] = useForm("xnqevpzg");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <form onSubmit={handleSubmit} className={`ContactUsForm ${formInView ? `visible` : ``}`} ref={formRef}>
            <div className='form-data'>
                <input type="text" name="Full Name" placeholder='שם מלא' />
                <input type="email" name="Email" placeholder='דוא"ל' />
                <input type="tel" name="Phone" placeholder='טלפון' />
                <button type="submit" disabled={state.submitting}>שלח</button>
            </div>
            <div className='form-content'>
                <h2>דברו איתנו!</h2>
                <p>אנו זמינים עבורכם לכל שאלה. השאירו פרטים ואנו מבטיחים לחזור אליכם תוך 2 ימי עסקים.</p>
                {props.withSocials ?
                    <div className='form-icons'>
                        <SocialIcons withText={false} />
                    </div> :
                    <div></div>}
            </div>
        </form>
    );
}

export default ContactUsForm;
