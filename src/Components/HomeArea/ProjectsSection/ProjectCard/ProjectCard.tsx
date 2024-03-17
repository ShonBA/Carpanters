import { useInView } from "react-intersection-observer";
import ProjectModel from "../../../../Models/ProjectModel";
import "./ProjectCard.scss";

interface ProjectProps {
    project: ProjectModel
}

function ProjectCard(props: ProjectProps): JSX.Element {
    const [projectCardRef, projectCardInView] = useInView({ triggerOnce: true });

    return (
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
    );
}

export default ProjectCard;
