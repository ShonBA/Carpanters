import GalleryMaterialModel from "../../../Models/GalleryMaterialModel";
import "./MaterialsCard.scss";

interface GalleryMaterialCardProps {
    material: GalleryMaterialModel;
}
function MaterialsCard(props: GalleryMaterialCardProps): JSX.Element {
    return (
        <div className="MaterialsCard">
            <img src={require("../../../Assets/Images/Gallery/Materials/" + props.material.imageName)} alt="" />
            <h4>{props.material.name}</h4>
            <p>{props.material.description}</p>
        </div>
    );
}

export default MaterialsCard;
