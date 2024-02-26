import DataArea from "../../../../Service/DataArea";
import GalleryCard from "../GalleryCard/GalleryCard";
import "./GalleryDisplay.scss";

function GalleryDisplay(): JSX.Element {
    const galleryData = DataArea.galleryData;
    const materials = ["פורמיקה", "מלמין", "פולימר"];

    return (
        <div className="GalleryDisplay">
            {materials.map(material => (
                <div>
                    <h2>מטבחי {material}</h2>
                    <div key={material} className="gallery__row">
                        {galleryData
                            .filter(g => g.material === material)
                            .map(d => <GalleryCard key={d.id} gallery={d} />)
                        }
                    </div>
                </div>
            ))}
        </div>
    );
}

export default GalleryDisplay;
