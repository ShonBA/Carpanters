import QualityModel from "../../../../Models/QualityModel";
import "./QualityCard.scss";
interface AboutProps {
    quality: QualityModel
}
function QualityCard(props: AboutProps): JSX.Element {
    return (
        <div className="QualityCard">
            <div className="qualityCard">
                <img src={require(`../../../../Assets/Images/${props.quality.imageName}`)} />
                <h3>{props.quality.header}</h3>
                <p>{props.quality.description}</p>
            </div>
        </div>
    );
}

export default QualityCard;
