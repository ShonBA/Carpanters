import x from '../../../Assets/Images/backround_image2.jpg';
import useTitle from "../../../Utils/useTitle";
import "./Gallery.scss";
import GalleryDisplay from "./GalleryDisplay/GalleryDisplay";
import GalleryMaterials from "./GalleryMaterials/GalleryMaterials";

function Gallery(): JSX.Element {
    useTitle("Gallery");
    return (
        <div className="Gallery">
            <div className="galleryHeaderContainer">
                <img src={x} />
                <h2>גלריית עבודות</h2>
            </div>
            <div className="galleryParaContainer">
                <h2>עם מה אנחנו עובדים ?</h2>
                <GalleryMaterials />
            </div>
            <div className="gallery">
                <GalleryDisplay />
            </div>
        </div>
    );
}

export default Gallery;
