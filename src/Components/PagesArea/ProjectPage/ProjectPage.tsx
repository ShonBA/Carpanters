import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProjectModel } from "../../../Models/ProjectModel";
import dataService from "../../../Service/DataArea";
import "./ProjectPage.scss";
import { ProjectPageGallery } from "./ProjectPageGallery/ProjectPageGallery";

export function ProjectsInfo(): JSX.Element {

    const params = useParams();
    const [feProject, setFeProject] = useState<ProjectModel>();

    useEffect(() => {
        dataService.getProjectDataByUuid(params.uuid)
            .then(beProject => setFeProject(beProject))
            .catch(err => console.log(err))
    }, [])

    if (!feProject) return <div>Loading...</div>

    return (
        <div className="ProjectsInfo">
            <div className="ProjectPageHeaderContainer">
                <h2>{feProject.description}</h2>
            </div>
            <div className="projectContainer">
                <div>
                    <ProjectPageGallery project={feProject} />
                </div>
                <div>
                    <p>עיצוב: {feProject.designer}</p>
                    <p>צילום: {feProject.photographer}</p>
                </div>
            </div>
        </div>
    );
}
