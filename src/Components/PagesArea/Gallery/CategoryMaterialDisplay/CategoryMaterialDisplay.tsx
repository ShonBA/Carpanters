import { Squash as Hamburger } from 'hamburger-react';
import { useState } from "react";
import { Collapse } from "react-collapse";
import GalleryCategoryModel from "../../../../Models/GalleryCategoryModel";
import GalleryRow from "../GalleryMaterialDisplay/GalleryMaterialDisplay";
import "./CategoryMaterialDisplay.scss";


interface GalleryCategoryProps {
    category: GalleryCategoryModel;
}

function CategoryGallery(props: GalleryCategoryProps): JSX.Element {
    const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(false);
    return (
        <div className="CategoryGallery">
            <h2 onClick={() => setIsCategoryOpen(!isCategoryOpen)}>{props.category.type}
                {isCategoryOpen ?
                    <Hamburger toggled={isCategoryOpen} /> :
                    <Hamburger toggled={isCategoryOpen} />}
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
