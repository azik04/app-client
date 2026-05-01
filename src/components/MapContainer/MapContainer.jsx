import { useState } from "react";
import "./style.css"
import MapInput from "./MapInput/MapInput";
import Map from "./Map/Map";

const MapContainer = ({ form, setForm, errors }) => {

    return (
        <div className="map-container">
            <MapInput location={form} setLocation={setForm} error={errors} />

            <Map location={form} setLocation={setForm} />
        </div>
    )
}

export default MapContainer;