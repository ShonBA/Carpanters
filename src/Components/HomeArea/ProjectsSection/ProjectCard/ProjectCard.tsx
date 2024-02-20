import ProjectModel from "../../../../Models/ProjectModel";
import "./ProjectCard.scss";

interface ProjectProps {
    project: ProjectModel
}

function ProjectCard(props: ProjectProps): JSX.Element {
    return (
        <div className="ProjectCard">
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
