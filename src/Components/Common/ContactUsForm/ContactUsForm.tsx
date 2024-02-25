import { useForm } from '@formspree/react';
import "./ContactUsForm.scss";


function ContactUsForm(): JSX.Element {

    const [state, handleSubmit] = useForm("xnqevpzg");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>שם מלא</label>
            <input type="text" name="Full Name" />

            <label>דואר אלקטרוני</label>
            <input type="email" name="Email" />

            <label>טלפון</label>
            <input type="tel" name="Phone" />

            <button type="submit" disabled={state.submitting}>Submit</button>
        </form>
    );
}

export default ContactUsForm;
