import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectModel from "../../../Models/ProjectModel";
import dataService from "../../../Service/DataArea";
import "./ProjectsPage.css";

export function ProjectsPage(): JSX.Element {

    const params = useParams();
    const [feProject, setFeProject] = useState<ProjectModel>();

    useEffect(() => {
        dataService.getProjectDataByUuid(params.uuid)
            .then(beProjects => setFeProject(beProjects))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="ProjectsPage">
        </div>
    );
}
