import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./style.css";
import { useEffect, useState } from "react";
import L from "leaflet";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import Loading from "../../Notification/Loading";

const blueIcon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

const Map = ({ location, setLocation, method }) => {
    const [marker, setMarker] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (location?.lat != null && location?.lng != null) {
            setMarker([location.lat, location.lng]);
        }
    }, [location]);

    const MoveMap = ({ position }) => {
        const map = useMap();

        useEffect(() => {
            if (position) {
                map.setView(position, map.getZoom(), {
                    animate: true,
                });
            }
        }, [position, map]);

        return null;
    };

    const MapClicker = () => {
        useMapEvents({
            click: async (e) => {
                setLoading(true)
                const { lat, lng } = e.latlng;

                setMarker([lat, lng]);

                const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=en`);
                const data = await res.json();

                setLocation(prev => ({
                    ...prev,
                    lat: lat,
                    lng: lng,
                    address: data.display_name
                }));

                setLoading(false)
            },
        });

        return null;
    };

    return (
        <>
            <MapContainer className="map" center={marker || [40.39093, 49.8871]} minZoom={5} zoom={12}>
                <TileLayer attribution="&copy; OpenStreetMap" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <MapClicker />

                {marker && <Marker position={marker} icon={blueIcon} />}
                <MoveMap position={marker} />
                {/* {markerPos && <MoveMap position={markerPos} />} */}
            </MapContainer>

            {loading && (<Loading />)}
        </>
    )
}

export default Map;