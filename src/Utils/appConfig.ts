class AppConfig {

    // Axios Urls
    public readonly aboutUsUrl: string = "https://raw.githubusercontent.com/ShonBA/Carpanters/main/public/JSON/carpentersAboutData.json";
    public readonly projectsUrl: string = "https://raw.githubusercontent.com/ShonBA/Carpanters/main/public/JSON/carpentersProjectsData.json";
    public readonly recommendationsUrl: string = "https://raw.githubusercontent.com/ShonBA/Carpanters/main/public/JSON/carpentersRecommendationsData.json";
    public readonly galleryUrl: string = "https://raw.githubusercontent.com/ShonBA/Carpanters/main/public/JSON/carpentersGalleryData.json";

    // Routes
    public readonly HomeRoute: string = "Carpenters/home";
    public readonly GalleryRoute: string = "Carpenters/gallery";
    public readonly ProjectsRoute: string = "Carpenters/projects";
    public readonly CustomCarpenterRoute: string = "Carpenters/custom-carpentry";
    public readonly AboutRoute: string = "Carpenters/about";
    public readonly RecommendationRoute: string = "Carpenters/recommendations";
    public readonly ContactUsRoute: string = "Carpenters/contact-us";

}

const appConfig = new AppConfig();

export default appConfig;
