import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectModel from "../../../Models/ProjectModel";
import dataService from "../../../Service/DataArea";
import CarouselLib from "react-multi-carousel";
import "./ProjectsPage.scss";

export function ProjectsPage(): JSX.Element {

    const params = useParams();
    const [feProject, setFeProject] = useState<ProjectModel>();

    useEffect(() => {
        dataService.getProjectDataByUuid(params.uuid)
            .then(beProjects => setFeProject(beProjects))
            .catch(err => console.log(err))
    }, [])

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
        <div className="ProjectsPage">
            <div className="projectPageHeaderContainer">
                <h2>{feProject?.description}</h2>
            </div>
            <div>
                <p>עיצוב: {feProject?.designer}</p>
                <p>צילום: {feProject?.photographer}</p>
            </div>
            <div>
                {feProject && <CarouselLib 
                responsive={responsive}
                >
                    {feProject?.imagesNames.map((image, index) =>
                        <img key={index} src={require(`../../../Assets/Images/Projects/${feProject?.imageFolderName}${image}`)} alt={image} />
                    )}
                </CarouselLib>}
            </div>
        </div>
    );
}
