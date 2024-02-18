import { Navigate, Route, Routes } from "react-router-dom";
import appConfig from "../../../Utils/appConfig";
import AboutUs from "../../CompanyArea/AboutUs/AboutUs";
import ContactUs from "../../CompanyArea/ContactUs/ContactUs";
import CustomCarpentery from "../../DisplayArea/CustomCarpentery/CustomCarpentery";
import Gallery from "../../DisplayArea/Gallery/Gallery";
import Home from "../../Home/Home";
import Projects from "../../DisplayArea/Projects/Projects";
import Recommendation from "../../CompanyArea/Recommendation/Recommendation";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Router.css";


function Router(): JSX.Element {
    return (
        <div className="Router">
            <Routes>
                <Route path={appConfig.HomeRoute} element={<Home />}></Route>
                <Route path={appConfig.GalleryRoute} element={<Gallery />}></Route>
                <Route path={appConfig.ProjectsRoute} element={<Projects />}></Route>
                <Route path={appConfig.CustomCarpenterRoute} element={<CustomCarpentery />}></Route>
                <Route path={appConfig.AboutRoute} element={<AboutUs />}></Route>
                <Route path={appConfig.RecommendationRoute} element={<Recommendation />}></Route>
                <Route path={appConfig.ContactUsRoute} element={<ContactUs />}></Route>

                {/* Default Routes */}
                <Route path="/" element={<Navigate to={appConfig.HomeRoute} />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default Router;
