import { useState } from "react";
import { Collapse } from "react-collapse";
import GalleryModel from "../../../../Models/GalleryModel";
import GalleryCard from "../GalleryCard/GalleryCard";
import "./GalleryRow.scss";
import GalleryCategoryModel from "../../../../Models/GalleryCategoryModel";

interface GalleryRowData {
    category: GalleryCategoryModel;
    material: string;
}

function GalleryRow(props: GalleryRowData): JSX.Element {

    const [isRowOpen, setIsRowOpen] = useState<boolean>(true);

    const isTypeShort = props.category.typeShort === "" ? props.category.type : props.category.typeShort

    return (
        <div className="GalleryRow">
            <h2>{isTypeShort} {props.material}
                {isRowOpen ?
                    <a onClick={() => setIsRowOpen(false)}>סגור {isTypeShort} {props.material}</a> :
                    <a onClick={() => setIsRowOpen(true)}>ראה עוד {isTypeShort} {props.material}..</a>
                }
            </h2>
            <Collapse isOpened={isRowOpen}>
                <div className="gallery__row">
                    {props.category.data
                        .filter(g => g.material === props.material)
                        .map(d => <GalleryCard key={d.id} gallery={d} />)
                    }
                </div>
            </Collapse>
        </div>
    );
}

export default GalleryRow;
