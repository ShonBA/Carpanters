import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";
import "./Layout.scss";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <header>
                <Navbar />
            </header>

            <main>
                <Main />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Layout;
