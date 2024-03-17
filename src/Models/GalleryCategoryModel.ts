import GalleryModel from "./GalleryModel";

class GalleryCategoryModel {
    public uuid: string;
    public type: string;
    public materials: string[];
    public data: GalleryModel[];
}

export default GalleryCategoryModel