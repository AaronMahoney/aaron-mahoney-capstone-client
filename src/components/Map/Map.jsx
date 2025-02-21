import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./Map.scss";

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const containerStyle = {
    width: "100%",
    height: "100%"
};

const center = {
    lat: 49,
    lng: -56.120
};

const zoomLevel = 5.7;

const MyMap = () => {
    return (
        <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoomLevel}>
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default MyMap;