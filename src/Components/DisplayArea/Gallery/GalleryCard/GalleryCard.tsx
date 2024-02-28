import GalleryModel from "../../../../Models/GalleryModel";
import "./GalleryCard.scss";

interface GalleryCardProps {
    gallery: GalleryModel
}

function GalleryCard(props: GalleryCardProps): JSX.Element {

    return (
        <div className="GalleryCard">
            <div className="gallery__thumb">
                <img src={require("../../../../Assets/Images/Gallery/" + props.gallery.imageName)} className="gallery__image" />
                <div className="gallery__caption">{props.gallery.caption}</div>
            </div>
        </div>
    );
}

export default GalleryCard;
