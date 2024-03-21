import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProjectModel } from "../../../Models/ProjectModel";
import dataService from "../../../Service/DataArea";
import { ProjectPageGallery } from "./ProjectPageGallery/ProjectPageGallery";
import "./ProjectPage.scss";
import data from "../../../Service/TestingProjectsData";

export function ProjectsInfo(): JSX.Element {

    const params = useParams();
    const [feProject, setFeProject] = useState<ProjectModel>();

    useEffect(() => {
        // Should be 
        // dataService.getProjectDataByUuid(params.uuid)
        //     .then(beProject => setFeProject(beProject))
        //     .catch(err => console.log(err))

        // Switching this will kill the gallery

        // Should be Deleted!!!
        const project = data.filter(d => d.uuid === params.uuid)[0];
        setFeProject(project);
    }, [])

    return (
        <div className="ProjectsInfo">
            <div className="ProjectPageHeaderContainer">
                <h2>{feProject?.description}</h2>
            </div>
            <div>
                <p>עיצוב: {feProject?.designer}</p>
                <p>צילום: {feProject?.photographer}</p>
            </div>
            <div>
                <ProjectPageGallery project={feProject} />
            </div>
        </div>
    );
}
