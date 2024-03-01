import useTitle from "../../../Utils/useTitle";
import "./AboutUs.scss";
import x from '../../../Assets/Images/backround_image1.jpg'

function AboutUs(): JSX.Element {
    useTitle("About Us");
    return (
        <div className="AboutUs">
            <div className="aboutUSHeaderContainer">
                <img src={x} />
                <h2>מי אנחנו?</h2>
            </div>
        </div>
    );
}

export default AboutUs;
