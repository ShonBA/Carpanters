import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import ProjectModel from "../../../../Models/ProjectModel";
import appConfig from "../../../../Utils/appConfig";
import "./ProjectCard.scss";

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
