class AppConfig {

    // Axios Urls
    public readonly aboutUsUrl: string = "https://raw.githubusercontent.com/ShonBA/Carpanters/main/public/JSON/carpentersAboutData.json?token=GHSAT0AAAAAACMKEZYGMICIBXZLW3VR62NWZPENJWQ";
    public readonly projectsUrl: string = "https://raw.githubusercontent.com/ShonBA/Carpanters/main/public/JSON/carpentersProjectsData.json?token=GHSAT0AAAAAACMKEZYHSRJOTW4QT2VLRE4KZPENKHQ";
    public readonly recommendationsUrl: string = "https://raw.githubusercontent.com/ShonBA/Carpanters/main/public/JSON/carpentersGalleryData.json?token=GHSAT0AAAAAACMKEZYGXQA3C7BDVUETET5UZPENJ7A";
    public readonly galleryUrl: string = "https://raw.githubusercontent.com/ShonBA/Carpanters/main/public/JSON/carpentersGalleryData.json?token=GHSAT0AAAAAACMKEZYGXQA3C7BDVUETET5UZPENJ7A";

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