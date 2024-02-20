import DataArea from "../../../Service/DataArea";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./ProjectsSection.scss";

function ProjectsSection(): JSX.Element {
    const projectsData = DataArea.projectsData;
    return (
        <div className="ProjectsSection">
            <div className="projectsHeader">
                <h3>
                    קצת פרוייקטים שלנו:
                </h3>
            </div>
            <div className="projectsCardContainer">
                {projectsData.map(project => <ProjectCard key={project.id} project={project} />)}
            </div>
        </div>
    );
}

export default ProjectsSection;
