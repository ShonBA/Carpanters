import "./ProjectsSection.scss";
import projectImage1 from "../../../Assets/Images/project1.jpeg"
import projectImage2 from "../../../Assets/Images/project2.jpeg"

function ProjectsSection(): JSX.Element {
    return (
        <div className="ProjectsSection">
            <div className="projectsHeader">
                <h3>
                    קצת פרוייקטים שלנו:
                </h3>
            </div>
            <div className="projectsCardContainer">
                <div className="projectCard">
                    <div className="card">
                        <img src={projectImage1} />
                        <div className="card-content">
                            <h2>
                                Cohen's Family
                            </h2>
                            <p>
                                Luxury Kitchen Cohen House,
                                Kitchen And Kids Room.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="projectCard">
                    <div className="card">
                        <img src={projectImage2} />
                        <div className="card-content">
                            <h2>
                                Simpsons's Family
                            </h2>
                            <p>
                                Luxury Kitchen, Dinning Table At Simpsons House,
                                Bart And Homer Rooms.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsSection;
