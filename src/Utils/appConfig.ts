class AppConfig {

    // Axios Urls
    public readonly aboutUsUrl: string = "https://raw.githubusercontent.com/ShonBA/Carpanters/main/public/JSON/carpentersAboutData.json";
    public readonly projectsUrl: string = "https://raw.githubusercontent.com/ShonBA/Carpanters/main/public/JSON/carpentersProjectsData.json";
    public readonly recommendationsUrl: string = "https://raw.githubusercontent.com/ShonBA/Carpanters/main/public/JSON/carpentersRecommendationsData.json";
    public readonly galleryUrl: string = "https://raw.githubusercontent.com/ShonBA/Carpanters/main/public/JSON/carpentersGalleryData.json";
    public readonly galleryMaterialsUrl: string = "https://raw.githubusercontent.com/ShonBA/Carpanters/main/public/JSON/carpentersMaterialsData.json";
    public readonly articlesUrl: string = "https://raw.githubusercontent.com/ShonBA/Carpanters/main/public/JSON/articlesData.json";

    // Routes
    public readonly HomeRoute: string = "/home";
    public readonly GalleryRoute: string = "/gallery";
    public readonly ProjectsRoute: string = "/projects";
    public readonly AboutRoute: string = "/about";
    public readonly RecommendationRoute: string = "/recommendations";
    public readonly ContactUsRoute: string = "/contact-us";

}

const appConfig = new AppConfig();

export default appConfig;
