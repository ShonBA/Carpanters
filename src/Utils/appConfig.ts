class AppConfig {

    // Axios Urls
    public readonly aboutUsUrl: string = "https://raw.githubusercontent.com/ShonBA/Carpenters-Data/main/carpentersAboutData.json";
    public readonly projectsUrl: string = "https://raw.githubusercontent.com/ShonBA/Carpenters-Data/main/carpentersProjectsData.json";
    public readonly recommendationsUrl: string = "https://raw.githubusercontent.com/ShonBA/Carpenters-Data/main/carpentersRecommendationsData.json";
    public readonly galleryUrl: string = "https://raw.githubusercontent.com/ShonBA/Carpenters-Data/main/carpentersGalleryData.json";

    // Routes
    public readonly HomeRoute: string = "/home";
    public readonly GalleryRoute: string = "/gallery";
    public readonly ProjectsRoute: string = "/projects";
    public readonly CustomCarpenterRoute: string = "/custom-carpentry";
    public readonly AboutRoute: string = "/about";
    public readonly RecommendationRoute: string = "/recommendations";
    public readonly ContactUsRoute: string = "/contact-us";

}

const appConfig = new AppConfig();

export default appConfig;