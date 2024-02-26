import { useState } from "react";
import { Collapse } from 'react-collapse';
import DataArea from "../../../../Service/DataArea";
import GalleryRow from "../GalleryRow/GalleryRow";
import "./GalleryDisplay.scss";

function GalleryDisplay(): JSX.Element {
    const kitchenGalleryData = DataArea.kitchenGalleryData;
    const materials = ["פורמיקה", "מלמין", "פולימר"];

    const [isKitchensOpen, setIsKitchensOpen] = useState<boolean>(false);

    return (
        <div className="GalleryDisplay">
            <h2>מטבחים
                {isKitchensOpen ?
                    <a onClick={() => setIsKitchensOpen(false)}>סגור</a> :
                    <a onClick={() => setIsKitchensOpen(true)}>ראה עוד...</a>}
            </h2>
            <Collapse isOpened={isKitchensOpen}>
                {materials.map((material, index) => (
                    <GalleryRow key={index} gallery={kitchenGalleryData} material={material} />
                ))}
            </Collapse>
        </div>
    );
}

export default GalleryDisplay;
