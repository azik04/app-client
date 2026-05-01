import { useState } from "react";
import "./style.css"
import Input from "../../Input/Input";

const MapInput = ({ location, setLocation, error }) => {
    const [prediction, setPrediction] = useState([]);
    
    const fetchPrediction = async (e) => {
        if (!e) {
            setPrediction([])
            return
        }

        const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(e)}&addressdetails=1&limit=10&countrycodes=AZ`);

        const data = await res.json();
        setPrediction(data);
    }

    const handleChange = (e) => {
        const val = e.target.value;

        setLocation((prev) => ({
            ...prev,
            address: val
        }));

        fetchPrediction(val);
    };

    const selectItem = (item) => {
        setPrediction([]);

        setLocation(prev => ({
            ...prev,
            lat: parseFloat(item.lat),
            lng: parseFloat(item.lon),
            address: item.display_name
        }));
    };

    return (
        <div className="col-12 mb-3">

            <Input label={"Type the address"} labelFor={"address"} placeholder={"Enter the address or select it on map"} value={location?.address} onChange={handleChange} id={"address"} name={"address"} error={error} />

            {prediction.length > 0 && (
                <ul className="map-predicate">
                    {prediction.map((item) => (
                        <li key={item.place_id} onClick={() => selectItem(item)}>
                            {item.display_name}
                        </li>
                    ))}
                </ul>
            )}

        </div>
    );
}

export default MapInput;