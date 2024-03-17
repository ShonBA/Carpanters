import useTitle from "../../../Utils/useTitle";
import "./Gallery.scss";
import GalleryDisplay from "./GalleryDisplay/GalleryDisplay";
import GalleryMaterials from "./GalleryMaterials/GalleryMaterials";

function Gallery(): JSX.Element {
    useTitle("Gallery");
    return (
        <div className="Gallery">
            <div className="galleryHeaderContainer">
                <h2>גלריית עבודות</h2>
            </div>
            <div className="gallery">
                <GalleryDisplay />
            </div>
            <div className="galleryParaContainer">
                <h2>עם מה אנחנו עובדים ?</h2>
                <GalleryMaterials />
            </div>
        </div>
    );
}

export default Gallery;
