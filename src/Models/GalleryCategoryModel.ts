import GalleryModel from "./GalleryModel";

class GalleryCategoryModel {
    public id: number;
    public type: string;
    public typeShort: string;
    public materials: string[];
    public data: GalleryModel[];
}

export default GalleryCategoryModel