import { useState } from "react";
import { Collapse } from "react-collapse";
import CarouselLib from "react-multi-carousel";
import GalleryCategoryModel from "../../../../Models/GalleryCategoryModel";
import GalleryCard from "../GalleryCard/GalleryCard";
import "./GalleryRow.scss";

interface GalleryRowData {
    category: GalleryCategoryModel;
    material: string;
}

function GalleryRow(props: GalleryRowData): JSX.Element {

    const [isRowOpen, setIsRowOpen] = useState<boolean>(false);

    const isTypeShort = props.category.typeShort === "" ? props.category.type : props.category.typeShort

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

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
                    <CarouselLib
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={5000}
                        transitionDuration={1500}
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                    >
                        {props.category.data
                            .filter(g => g.material === props.material)
                            .map(d => <GalleryCard key={d.id} gallery={d} />)}
                    </CarouselLib>
                </div>
            </Collapse>

        </div>
    );
}

export default GalleryRow;