import { useState } from "react";
import { Collapse } from "react-collapse";
import GalleryCategoryModel from "../../../../Models/GalleryCategoryModel";
import GalleryRow from "../GalleryRow/GalleryRow";
import "./CategoryGallery.scss";
import { Squash as Hamburger } from 'hamburger-react'

interface GalleryCategoryProps {
    category: GalleryCategoryModel;
}

function CategoryGallery(props: GalleryCategoryProps): JSX.Element {
    const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(false);
    return (
        <div className="CategoryGallery">
            <h2>{props.category.type}
                {isCategoryOpen ?
                    <Hamburger toggled={isCategoryOpen} toggle={setIsCategoryOpen} /> :
                    <Hamburger toggled={isCategoryOpen} toggle={setIsCategoryOpen} />}
            </h2>
            <Collapse isOpened={isCategoryOpen}>
                {props.category.materials.map((material, index) => (
                    <GalleryRow key={index} category={props.category} material={material} />
                ))}
            </Collapse>
        </div>
    );
}

export default CategoryGallery;
