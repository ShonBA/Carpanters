import { useState } from "react";
import { Collapse } from "react-collapse";
import GalleryModel from "../../../../Models/GalleryModel";
import GalleryCard from "../GalleryCard/GalleryCard";
import "./GalleryRow.css";

interface GalleryRowData {
    gallery: GalleryModel[];
    material: string
}

function GalleryRow(props: GalleryRowData): JSX.Element {

    const [isRowOpen, setIsRowOpen] = useState<boolean>(true);

    return (
        <div className="GalleryRow">
            <h2>מטבחי {props.material}
                {isRowOpen ?
                    <a onClick={() => setIsRowOpen(false)}>סגור מטבחי {props.material}</a> :
                    <a onClick={() => setIsRowOpen(true)}>ראה עוד מטבחי {props.material}..</a>
                }
            </h2>
            <Collapse isOpened={isRowOpen}>
                <div className="gallery__row">
                    {props.gallery
                        .filter(g => g.material === props.material)
                        .map(d => <GalleryCard key={d.id} gallery={d} />)
                    }
                </div>
            </Collapse>
        </div>
    );
}

export default GalleryRow;
