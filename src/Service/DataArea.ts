import axios from "axios";
import GalleryCategoryModel from "../Models/GalleryCategoryModel";
import GalleryMaterialModel from "../Models/GalleryMaterialModel";
import ProjectModel from "../Models/ProjectModel";
import QualityModel from "../Models/QualityModel";
import RecommendationModel from "../Models/RecommendationModel";
import { DataAction, DataActionTypes, dataStore } from "../Redux/DataState";
import appConfig from "../Utils/appConfig";

class DataService {
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
}

const dataService = new DataService();
export default dataService;
