class AppConfig {

    public readonly HomeRoute: string = "/home";
    public readonly GalleryRoute: string = "/gallery";
    public readonly ProjectsRoute: string = "/projects";
    public readonly CustomCarpenterRoute: string = "/custom-carpenter";
    public readonly AboutRoute: string = "/about";
    public readonly RecommendationRoute: string = "/recommendation";
    public readonly ContactUsRoute: string = "/contact-us";

}

const appConfig = new AppConfig();

export default appConfig;