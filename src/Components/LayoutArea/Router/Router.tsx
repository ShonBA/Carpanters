import { Navigate, Route, Routes } from "react-router-dom";
import appConfig from "../../../Utils/appConfig";
import Home from "../../HomeArea/Home/Home";
import AboutUs from "../../PagesArea/AboutUs/AboutUs";
import ContactUs from "../../PagesArea/ContactUs/ContactUs";
import Gallery from "../../PagesArea/Gallery/Gallery";
import { ProjectsInfo } from "../../PagesArea/ProjectPage/ProjectPage";
import Recommendations from "../../PagesArea/Recommendations/Recommendations";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Router.scss";

function Router(): JSX.Element {
    return (
        <div className="Router">
            <Routes>
                <Route path={appConfig.HomeRoute} element={<Home />}></Route>
                <Route path={appConfig.GalleryRoute} element={<Gallery />}></Route>
                <Route path={appConfig.AboutRoute} element={<AboutUs />}></Route>
                <Route path={appConfig.RecommendationRoute} element={<Recommendations />}></Route>
                <Route path={appConfig.ContactUsRoute} element={<ContactUs />}></Route>
                <Route path={appConfig.ProjectsRoute + "/:uuid"} element={<ProjectsInfo />}></Route>

                {/* GH Pages */}
                <Route path="/Carpanters" element={<Navigate to={appConfig.HomeRoute} />} />

                {/* Default Routes */}
                <Route path="/" element={<Navigate to={appConfig.HomeRoute} />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default Router;
