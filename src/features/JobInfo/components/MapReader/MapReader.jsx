import Map from "../../../../components/MapContainer/Map/Map";
import "./style.css"

const MapReader = ({ location }) => {

    const openMap = () => {
        window.open(
            `https://waze.com/ul?ll=${location.lat},${location.lng}&navigate=yes`,
            "_blank"
        );
    };

    return (
        <div className="col-12 col-md-6">
            <div className="map-reader">
                <h4 className="mb-3">Map</h4>

                <Map location={location} />

                <button className="btn btn-dark mt-3" onClick={openMap}>Open in Waze</button>
            </div>
        </div>
    )
}

export default MapReader;