import axios from "axios";
import GalleryCategoryModel from "../Models/GalleryCategoryModel";
import ProjectModel from "../Models/ProjectModel";
import QualityModel from "../Models/QualityModel";
import RecommendationModel from "../Models/RecommendationModel";
import appConfig from "../Utils/appConfig";

class DataService {
    public async getAllAboutUsData(): Promise<QualityModel[]> {
        const response = await axios.get<QualityModel[]>(appConfig.aboutUsUrl);
        const data = response.data;
        return data;
    }
    public async getAllProjectsData(): Promise<ProjectModel[]> {
        const response = await axios.get<ProjectModel[]>(appConfig.projectsUrl);
        const data = response.data;
        return data;
    }
    public async getAllRecommendationsData(): Promise<RecommendationModel[]> {
        const response = await axios.get<RecommendationModel[]>(appConfig.recommendationsUrl);
        const data = response.data;
        return data;
    }
    public async getAllGalleryData(): Promise<GalleryCategoryModel[]> {
        const response = await axios.get<GalleryCategoryModel[]>(appConfig.galleryUrl);
        const data = response.data;
        return data;
    }
}

const dataService = new DataService();
export default dataService;
