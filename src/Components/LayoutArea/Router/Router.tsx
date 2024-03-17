import { Navigate, Route, Routes } from "react-router-dom";
import appConfig from "../../../Utils/appConfig";
import AboutUs from "../../CompanyArea/AboutUs/AboutUs";
import ContactUs from "../../CompanyArea/ContactUs/ContactUs";
import Recommendations from "../../CompanyArea/Recommendations/Recommendations";
import CustomCarpentry from "../../DisplayArea/CustomCarpentry/CustomCarpentry";
import Gallery from "../../DisplayArea/Gallery/Gallery";
import { ProjectsPage } from "../../DisplayArea/ProjectsPage/ProjectsPage";
import Home from "../../HomeArea/Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Router.scss";

function Router(): JSX.Element {
    return (
        <div className="Router">
            <Routes>
                <Route path={appConfig.HomeRoute} element={<Home />}></Route>
                <Route path={appConfig.GalleryRoute} element={<Gallery />}></Route>
                <Route path={appConfig.CustomCarpenterRoute} element={<CustomCarpentry />}></Route>
                <Route path={appConfig.AboutRoute} element={<AboutUs />}></Route>
                <Route path={appConfig.RecommendationRoute} element={<Recommendations />}></Route>
                <Route path={appConfig.ContactUsRoute} element={<ContactUs />}></Route>
                <Route path={appConfig.ProjectsRoute + ":uuid"} element={<ProjectsPage />}></Route>

                {/* Default Routes */}
                <Route path="/" element={<Navigate to={appConfig.HomeRoute} />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default Router;
