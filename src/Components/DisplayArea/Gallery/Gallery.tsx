import useTitle from "../../../Utils/useTitle";
import GalleryDisplay from "./GalleryDisplay/GalleryDisplay";
import "./Gallery.scss";
import x from '../../../Assets/Images/backround_image2.jpg';
function Gallery(): JSX.Element {
    useTitle("Gallery");

    return (
        <div className="Gallery">
            <div className="galleryHeaderContainer">
                <img src={x} />
                <h2>גלריית עבודות</h2>
            </div>
            <div className="gallery">
                <GalleryDisplay />
            </div>
        </div>
    );
}

export default Gallery;
