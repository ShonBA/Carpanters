import axios from "axios";
import GalleryCategoryModel from "../Models/GalleryCategoryModel";
import GalleryMaterialModel from "../Models/GalleryMaterialModel";
import ProjectModel from "../Models/ProjectModel";
import QualityModel from "../Models/QualityModel";
import RecommendationModel from "../Models/RecommendationModel";
import { DataAction, DataActionTypes, dataStore } from "../Redux/DataState";
import appConfig from "../Utils/appConfig";
import { ArticleModel } from "../Models/ArticleModel";

class DataService {
    // About Us Cards
    public async getAllAboutUsData(): Promise<QualityModel[]> {
        let data = dataStore.getState().aboutUs
        if (data.length === 0) {
            const response = await axios.get<QualityModel[]>(appConfig.aboutUsUrl);
            data = response.data;
        }
        const action: DataAction = { type: DataActionTypes.SetAboutUs, payload: data };
        dataStore.dispatch(action)
        return data;
    }

    // Project Data
    public async getAllProjectsData(): Promise<ProjectModel[]> {
        let data = dataStore.getState().projects
        if (data.length === 0) {
            const response = await axios.get<ProjectModel[]>(appConfig.projectsUrl);
            data = response.data;
        }
        const action: DataAction = { type: DataActionTypes.SetProjects, payload: data };
        dataStore.dispatch(action)
        return data;
    }

    // One Project Data
    public async getProjectDataByUuid(uuid: string): Promise<ProjectModel> {
        const projects = await this.getAllProjectsData();
        const project = projects.find(p => p.uuid === uuid);
        return project;
    }

    // Recommendation Data
    public async getAllRecommendationsData(): Promise<RecommendationModel[]> {
        let data = dataStore.getState().Recommendations
        if (data.length === 0) {
            const response = await axios.get<RecommendationModel[]>(appConfig.recommendationsUrl);
            data = response.data;
        }
        const action: DataAction = { type: DataActionTypes.SetRecommendations, payload: data };
        dataStore.dispatch(action)
        return data;
    }

    // Gallery Data
    public async getAllGalleryData(): Promise<GalleryCategoryModel[]> {
        let data = dataStore.getState().galleries
        if (data.length === 0) {
            const response = await axios.get<GalleryCategoryModel[]>(appConfig.galleryUrl);
            data = response.data;
        }
        const action: DataAction = { type: DataActionTypes.SetGalleries, payload: data };
        dataStore.dispatch(action)
        return data;
    }

    // Materials Gallery Data
    public async getAllGalleryMaterialsData(): Promise<GalleryMaterialModel[]> {
        let data = dataStore.getState().galleryMaterials
        if (data.length === 0) {
            const response = await axios.get<GalleryMaterialModel[]>(appConfig.galleryMaterialsUrl);
            data = response.data;
        }
        const action: DataAction = { type: DataActionTypes.SetGalleryMaterial, payload: data };
        dataStore.dispatch(action)
        return data;
    }

    // Articles Data
    public async getAllArticlesData(): Promise<ArticleModel[]> {
        let data = dataStore.getState().articles
        if (data.length === 0) {
            const response = await axios.get<ArticleModel[]>(appConfig.articlesUrl);
            data = response.data;
        }
        const action: DataAction = { type: DataActionTypes.SetArticles, payload: data };
        dataStore.dispatch(action)
        return data;
    }
}

const dataService = new DataService();
export default dataService;
