import DataArea from "../../../../Service/DataArea";
import CategoryGallery from "../CategoryGallery/CategoryGallery";
import "./GalleryDisplay.scss";

function GalleryDisplay(): JSX.Element {

    const data = DataArea.galleryData;

    return (
        <div className="GalleryDisplay">
            <div className="categorySection">
                {data.map(c => <CategoryGallery key={c.id} category={c} />)}
            </div>
        </div>
    );
}

export default GalleryDisplay;
