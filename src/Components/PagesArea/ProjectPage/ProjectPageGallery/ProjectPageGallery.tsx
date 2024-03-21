import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import { Lightbox } from "yet-another-react-lightbox";
import { Captions } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import { ProjectModel } from "../../../../Models/ProjectModel";
import "./ProjectPageGallery.scss";

interface TestingProps {
    project: ProjectModel;
}

export function ProjectPageGallery(props: TestingProps): JSX.Element {

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    return (
        <div className="ProjectPageGallery">
            {/* Will be removed only for testing */}
            <button type="button" onClick={() => setOpen(true)}>
                Open Lightbox
            </button>
            <div>
                <PhotoAlbum
                    layout="rows"
                    photos={props.project?.srcSet}
                    onClick={({ index: current }) => {
                        setIndex(current);
                        setOpen(true);
                    }}
                />
                <Lightbox
                    plugins={[Captions]}
                    open={open}
                    close={() => setOpen(false)}
                    slides={props.project?.imagesData}
                    index={index}
                />
            </div>
        </div>
    );
}
