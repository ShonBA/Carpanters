import { useInView } from "react-intersection-observer";
import ProjectModel from "../../../../Models/ProjectModel";
import "./ProjectCard.scss";
import { NavLink } from "react-router-dom";
import appConfig from "../../../../Utils/appConfig";

interface ProjectProps {
    project: ProjectModel
}

function ProjectCard(props: ProjectProps): JSX.Element {
    const [projectCardRef, projectCardInView] = useInView({ triggerOnce: true });

    return (
        <NavLink to={appConfig.ProjectsRoute + `/${props.project.uuid}`}>
            <div className={`ProjectCard ${projectCardInView ? `visible` : ``}`} ref={projectCardRef}>
                <img src={require(`../../../../Assets/Images/${props.project.imageName}`)} />
                <div className="card-content">
                    <h2>
                        {props.project.title}
                    </h2>
                    <p>
                        {props.project.description}
                    </p>
                </div>
            </div>
        </NavLink>
    );
}

export default ProjectCard;
