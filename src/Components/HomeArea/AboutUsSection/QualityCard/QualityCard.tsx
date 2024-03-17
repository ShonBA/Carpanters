import { useInView } from "react-intersection-observer";
import QualityModel from "../../../../Models/QualityModel";
import "./QualityCard.scss";

interface AboutProps {
    quality: QualityModel
}

function QualityCard(props: AboutProps): JSX.Element {

    const [cardRef, cardInView] = useInView({ triggerOnce: true });

    return (
        <div className={`QualityCard ${cardInView ? `visible` : ``}`} ref={cardRef}>
            <div className={`qualityCard `}>
                <img src={require(`../../../../Assets/Images/${props.quality.imageName}`)} />
                <h3>{props.quality.header}</h3>
                <p>{props.quality.description}</p>
            </div>
        </div>
    );
}

export default QualityCard;
