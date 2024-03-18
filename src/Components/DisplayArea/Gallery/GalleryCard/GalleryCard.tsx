import GalleryModel from "../../../../Models/GalleryModel";
import "./GalleryCard.scss";

interface GalleryCardProps {
    withCaption: boolean;
    gallery: GalleryModel;
    imagePath: string;
}

function GalleryCard(props: GalleryCardProps): JSX.Element {

    return (
        <div className="GalleryCard">
            {props.withCaption ?
                <div className="gallery__thumb">
                    <img src={require("../../../../Assets/Images/Gallery/" + props.gallery.imageName)} className="gallery__image" />
                    <div className="gallery__caption">{props.gallery.caption}</div>
                </div> :
                <div className="gallery__thumb">
                    <img src={require("../../../../Assets/Images/Projects/" + props.imagePath)} className="gallery__image" />
                </div>
            }
        </div>
    );
}

export default GalleryCard;
