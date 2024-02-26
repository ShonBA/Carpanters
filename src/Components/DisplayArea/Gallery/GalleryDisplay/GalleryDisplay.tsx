import { useState } from "react";
import { Collapse } from 'react-collapse';
import { NavLink } from "react-router-dom";
import DataArea from "../../../../Service/DataArea";
import GalleryCard from "../GalleryCard/GalleryCard";
import "./GalleryDisplay.scss";

function GalleryDisplay(): JSX.Element {
    const galleryData = DataArea.galleryData;
    const materials = ["פורמיקה", "מלמין", "פולימר"];

    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div className="GalleryDisplay">
            <h2>מטבחים 
                {isOpen ?
                <a onClick={() => setIsOpen(false)}>סגור</a> :
                <a onClick={() => setIsOpen(true)}>ראה עוד...</a>}
            </h2>
            <Collapse isOpened={isOpen}>
                {materials.map((material, index) => (
                    <div key={index}>
                        <h2>מטבחי {material} <NavLink to={'#'}>ראה עוד מטבחי {material}..</NavLink></h2>
                        <div className="gallery__row">
                            {galleryData
                                .filter(g => g.material === material)
                                .map(d => <GalleryCard key={d.id} gallery={d} />)
                            }
                        </div>
                    </div>
                ))}
            </Collapse>
        </div>
    );
}

export default GalleryDisplay;
