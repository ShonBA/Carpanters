import { useForm } from '@formspree/react';
import "./ContactUsForm.scss";


function ContactUsForm(): JSX.Element {

    const [state, handleSubmit] = useForm("xnqevpzg");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <div className='ContactUsForm'>
            <form onSubmit={handleSubmit} className='formContainer'>
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
            </form>
        </div>
    );
}

export default ContactUsForm;
