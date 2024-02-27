import DataArea from "../../../../Service/DataArea";
import CategoryGallery from "../CategoryGallery/CategoryGallery";
import "./GalleryDisplay.scss";

function GalleryDisplay(): JSX.Element {

    const data = DataArea.galleryData;

    return (
        <div className="GalleryDisplay">
            <div className="kitchensSection">
                <CategoryGallery key={data.kitchens.id} category={data.kitchens} />
            </div>
            <div className="closetsSection">
                <CategoryGallery key={data.closets.id} category={data.closets} />
            </div>
        </div>
    );
}

export default GalleryDisplay;
