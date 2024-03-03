import { useEffect, useState } from "react";
import CarouselLib from "react-multi-carousel";
import GalleryMaterialModel from "../../../../Models/GalleryMaterialModel";
import dataService from "../../../../Service/DataArea";
import "./GalleryMaterials.scss";
import MaterialsCard from "./MaterialsCard/MaterialsCard";

function GalleryMaterials(): JSX.Element {

    const [feGalleryData, setFeGalleryData] = useState<GalleryMaterialModel[]>([]);

    useEffect(() => {
        dataService.getAllGalleryMaterialsData()
            .then(beGalleryData => setFeGalleryData(beGalleryData))
            .catch(err => console.log(err))
    }, []);
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
        <div className="GalleryMaterials">
            <CarouselLib responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2500}
                transitionDuration={1500}
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >

                {feGalleryData.map(m => <MaterialsCard key={m.id} material={m} />)}

            </CarouselLib>
        </div>
    );
}

export default GalleryMaterials;
