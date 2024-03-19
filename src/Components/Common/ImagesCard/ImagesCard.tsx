import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import ProjectModel from "../../../Models/ProjectModel";
import appConfig from "../../../Utils/appConfig";
import "./ImagesCard.scss";

interface ProjectProps {
    project: ProjectModel
}

function ImagesCard(props: ProjectProps): JSX.Element {

    const [projectCardRef, projectCardInView] = useInView({ triggerOnce: true });

    return (
        <NavLink to={appConfig.ProjectsRoute + `/${props.project.uuid}`}>
            <div className={`ImagesCard ${projectCardInView ? `visible` : ``}`} ref={projectCardRef}>
                <img src={require(`../../../Assets/Images/Projects/${props.project.imageFolderName}${props.project.imagesNames[0]}`)} />
                <div className="card-content">
                    <h2>
                        {props.project.designer}
                    </h2>
                    <p>
                        {props.project.description}
                    </p>
                </div>
            </div>
        </NavLink>
    );
}

export default ImagesCard;
