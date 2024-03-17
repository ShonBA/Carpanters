import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ProjectModel from "../../../Models/ProjectModel";
import dataService from "../../../Service/DataArea";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./ProjectsSection.scss";

function ProjectsSection(): JSX.Element {

    const [feProjectsData, setFeProjectsData] = useState<ProjectModel[]>([]);

    const [projectHeaderRef, projectHeaderInView] = useInView({ triggerOnce: true });

    useEffect(() => {
        dataService.getAllProjectsData()
            .then(beProjectsData => setFeProjectsData(beProjectsData))
            .catch(err => console.log(err))
    }, []);


    return (
        <div className="ProjectsSection">
            <div className={`projectsHeader ${projectHeaderInView ? `visible` : ``}`} ref={projectHeaderRef}>
                <h3>
                    קצת פרוייקטים שלנו:
                </h3>
            </div>
            <div className="projectsCardContainer">
                {feProjectsData.map(project => <ProjectCard key={project.uuid} project={project} />)}
            </div>
        </div>
    );
}

export default ProjectsSection;
