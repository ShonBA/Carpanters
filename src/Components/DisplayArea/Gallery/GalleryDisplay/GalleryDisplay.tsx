import { useEffect, useState } from "react";
import GalleryCategoryModel from "../../../../Models/GalleryCategoryModel";
import dataService from "../../../../Service/DataArea";
import CategoryGallery from "../CategoryGallery/CategoryGallery";
import "./GalleryDisplay.scss";

function GalleryDisplay(): JSX.Element {
    const [feGalleryData, setFeGalleryData] = useState<GalleryCategoryModel[]>([]);

    useEffect(() => {
        dataService.getAllGalleryData()
            .then(beGalleryData => setFeGalleryData(beGalleryData))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <div className="GalleryDisplay">
            <div className="categorySection">
                {feGalleryData.length > 0 ? feGalleryData.map(c => <CategoryGallery key={c.id} category={c} />) : <div></div>}
            </div>
        </div>
    );
}

export default GalleryDisplay;
