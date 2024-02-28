import { createStore } from "redux";
import GalleryCategoryModel from "../Models/GalleryCategoryModel";
import ProjectModel from "../Models/ProjectModel";
import QualityModel from "../Models/QualityModel";
import RecommendationModel from "../Models/RecommendationModel";


export class DataState {
    public aboutUs: QualityModel[] = [];
    public galleries: GalleryCategoryModel[] = [];
    public projects: ProjectModel[] = [];
    public Recommendations: RecommendationModel[] = [];
}

export enum DataActionTypes {
    SetAboutUs = "SetAboutUs",
    SetGalleries = "SetGalleries",
    SetProjects = "SetProjects",
    SetRecommendations = "SetRecommendations",

}

export interface DataAction {
    type: DataActionTypes;
    payload?: any;
}

function dataReducer(currentState = new DataState(), action: DataAction): DataState {
    const newState = { ...currentState };
    switch (action.type) {
        case DataActionTypes.SetAboutUs:
            newState.aboutUs = action.payload;
            break;
        case DataActionTypes.SetGalleries:
            newState.galleries = action.payload;
            break;
        case DataActionTypes.SetProjects:
            newState.projects = action.payload;
            break;
        case DataActionTypes.SetRecommendations:
            newState.Recommendations = action.payload;
            break;
    }

    return newState;
}

export const dataStore = createStore(dataReducer);