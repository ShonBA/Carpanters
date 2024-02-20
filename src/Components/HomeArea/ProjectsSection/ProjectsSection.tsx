import ProjectCard from "./ProjectCard/ProjectCard";
import "./ProjectsSection.scss";

function ProjectsSection(): JSX.Element {
    const projectsData = [
        {
            id: 1,
            title: "משפחת כהן",
            description: "מטבח יוקרה מושלם למשפחת כהן",
            imageName: "project1.jpg",
        },
        {
            id: 2,
            title: "משפחת לוי",
            description: "מטבח כפרי וארונות חדרים.",
            imageName: "project2.jpg",
        },
        {
            id: 3,
            title: "משפחת יצחק",
            description: "ריהוט כללי לכל הבית",
            imageName: "project3.jpg",
        },
        {
            id: 4,
            title: "משפחת ששון",
            description: "ארונות הביתה וקיר.",
            imageName: "project4.jpg",
        },

    ];
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
