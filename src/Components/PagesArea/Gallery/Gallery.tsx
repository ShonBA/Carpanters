import useTitle from "../../../Utils/useTitle";
import Articles from "../../Common/Articles/Articles";
import "./Gallery.scss";
import GalleryDisplay from "./GalleryCategoryDisplay/GalleryCategoryDisplay";
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
            <Articles />
        </div>
    );
}

export default Gallery;
