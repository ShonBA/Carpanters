import GalleryModel from "../../../Models/GalleryModel";
import "./ImageCard.scss";

interface ImageCardProps {
    withCaption: boolean;
    gallery: GalleryModel;
    imagePath: string;
}

function ImageCard(props: ImageCardProps): JSX.Element {

    return (
        <div className="ImageCard">
            {props.withCaption ?
                <div className="gallery__thumb">
                    <img src={require("../../../Assets/Images/Gallery/" + props.gallery.imageName)} className="gallery__image" />
                    <div className="gallery__caption">{props.gallery.caption}</div>
                </div> :
                <div className="gallery__thumb">
                    <img src={require("../../../Assets/Images/Projects/" + props.imagePath)} className="gallery__image" />
                </div>
            }
        </div>
    );
}

export default ImageCard;
