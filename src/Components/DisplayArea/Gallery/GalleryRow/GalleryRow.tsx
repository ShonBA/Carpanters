import { useState } from "react";
import { Collapse } from "react-collapse";
import GalleryCategoryModel from "../../../../Models/GalleryCategoryModel";
import GalleryCard from "../GalleryCard/GalleryCard";
import { Squeeze as Hamburger } from 'hamburger-react'
import "./GalleryRow.scss";

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
                    <Hamburger toggled={isRowOpen} toggle={setIsRowOpen} /> :
                    <Hamburger toggled={isRowOpen} toggle={setIsRowOpen} />}
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
