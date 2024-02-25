import useTitle from "../../../Utils/useTitle";
import hdf1 from "../../../Assets/Images/Gallery/gallery-HDF1.jpg"
import hdf2 from "../../../Assets/Images/Gallery/gallery-HDF2.webp"
import hdf3 from "../../../Assets/Images/Gallery/gallery-HDF3.webp"
import hdf4 from "../../../Assets/Images/Gallery/gallery-HDF4.jpg"
import malamin1 from "../../../Assets/Images/Gallery/gallery-malamin1.jpeg"
import malamin2 from "../../../Assets/Images/Gallery/gallery-malamin2.jpeg"
import malamin3 from "../../../Assets/Images/Gallery/gallery-malamin3.jpeg"
import malamin4 from "../../../Assets/Images/Gallery/gallery-malamin4.jpg"
import polimer1 from "../../../Assets/Images/Gallery/gallery-polimer1.jpeg"
import polimer2 from "../../../Assets/Images/Gallery/gallery-polimer2.jpg"
import polimer3 from "../../../Assets/Images/Gallery/gallery-polimer3.jpeg"
import polimer4 from "../../../Assets/Images/Gallery/gallery-polimer4.jpg"
import "./Gallery.scss";

function Gallery(): JSX.Element {
    useTitle("Gallery");

    return (
        <div className="Gallery">
            <div className="galleryHeaderContainer">
                <h2>העבודות שלנו:</h2>
            </div>
            <div className="gallery">
                <div className="gallery__column">

                    <figure className="gallery__thumb">
                        <img src={hdf1} className="gallery__image" />
                        <figcaption className="gallery__caption">מטבח פורמיקה</figcaption>
                    </figure>

                    <figure className="gallery__thumb">
                        <img src={hdf2} className="gallery__image" />
                        <figcaption className="gallery__caption">מטבח פורמיקה</figcaption>
                    </figure>

                    <figure className="gallery__thumb">
                        <img src={hdf3} className="gallery__image" />
                        <figcaption className="gallery__caption">מטבח פורמיקה</figcaption>
                    </figure>

                </div>

                <div className="gallery__column">

                    <figure className="gallery__thumb">
                        <img src={hdf4} className="gallery__image" />
                        <figcaption className="gallery__caption">מטבח פורמיקה</figcaption>
                    </figure>

                    <figure className="gallery__thumb">
                        <img src={malamin1} className="gallery__image" />
                        <figcaption className="gallery__caption">מטבח מלמין</figcaption>
                    </figure>

                    <figure className="gallery__thumb">
                        <img src={malamin2} className="gallery__image" />
                        <figcaption className="gallery__caption">מטבח מלמין</figcaption>
                    </figure>

                </div>

                <div className="gallery__column">

                    <figure className="gallery__thumb">
                        <img src={malamin3} className="gallery__image" />
                        <figcaption className="gallery__caption">מטבח מלמין</figcaption>
                    </figure>

                    <figure className="gallery__thumb">
                        <img src={malamin4} className="gallery__image" />
                        <figcaption className="gallery__caption">מטבח מלמין</figcaption>
                    </figure>

                    <figure className="gallery__thumb">
                        <img src={polimer1} className="gallery__image" />
                        <figcaption className="gallery__caption">מטבח פולימר</figcaption>
                    </figure>

                </div>

                <div className="gallery__column">

                    <figure className="gallery__thumb">
                        <img src={polimer2} className="gallery__image" />
                        <figcaption className="gallery__caption">מטבח פולימר</figcaption>
                    </figure>

                    <figure className="gallery__thumb">
                        <img src={polimer3} className="gallery__image" />
                        <figcaption className="gallery__caption">מטבח פולימר</figcaption>
                    </figure>

                    <figure className="gallery__thumb">
                        <img src={polimer4} className="gallery__image" />
                        <figcaption className="gallery__caption">מטבח פולימר</figcaption>
                    </figure>

                </div>
            </div>
        </div>
    );
}

export default Gallery;
