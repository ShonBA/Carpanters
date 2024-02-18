import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Router from "../Router/Router";
import "./Layout.scss";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <main>
                <Router />
            </main>
            <header>
                <Navbar />
            </header>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Layout;
