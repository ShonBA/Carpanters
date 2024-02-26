import GalleryModel from "../../../../Models/GalleryModel";
import "./GalleryCard.scss";

interface GalleryCardProps {
    gallery: GalleryModel
}

function GalleryCard(props: GalleryCardProps): JSX.Element {
    return (
        <div className="GalleryCard">
            <figure className="gallery__thumb">
                <img src={require("../../../../Assets/Images/Gallery/" + props.gallery.imageName)} className="gallery__image" />
                <figcaption className="gallery__caption">{props.gallery.caption}</figcaption>
            </figure>
        </div>
    );
}

export default GalleryCard;
