import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import mapMarker from "../../../Assets/Images/map_marker.png";
import './Map.scss';

function Map(): JSX.Element {
    useEffect(() => {
        const map = L.map('map').setView([32.0853, 34.7818], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        }).addTo(map);

        const myIcon = L.icon({
            iconUrl: mapMarker,
            iconSize: [35, 40],
            popupAnchor: [0, -10],
        });

        L.marker([32.08, 34.78], { icon: myIcon }).addTo(map)
            .bindPopup('Wood Wonders Carpentry')
            .openPopup()
    }, []);

    return (
        <div className="Map">
            <div id="map"></div>
        </div>
    );
}

export default Map;
