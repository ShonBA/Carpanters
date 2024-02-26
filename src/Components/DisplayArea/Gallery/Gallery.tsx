import useTitle from "../../../Utils/useTitle";
import GalleryDisplay from "./GalleryDisplay/GalleryDisplay";
import "./Gallery.scss";

function Gallery(): JSX.Element {
    useTitle("Gallery");

    return (
        <div className="Gallery">
            <div className="galleryHeaderContainer">
                <h2>העבודות שלנו:</h2>
            </div>
            <div className="gallery">
                <GalleryDisplay />
            </div>
        </div>
    );
}

export default Gallery;
