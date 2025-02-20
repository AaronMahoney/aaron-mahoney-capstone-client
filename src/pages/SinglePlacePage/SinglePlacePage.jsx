import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './SinglePlacePage.scss';

const base_URL = import.meta.env.VITE_API_URL;

function SinglePlacePage() {

    const {placeId} = useParams();

    const [place, setPlace] = useState(null)

    const getPlaceById = async (id) => {
        try {
            const response = await axios.get(`${base_URL}/places/${id}`);
            setPlace(response.data)
        } catch (error) {
            console.error("Error getting place by ID", id);
        }
    }

    useEffect(() => {
        getPlaceById(placeId)
    }, [placeId]);

  return (
    <div className="placecard-wrapper">
                {place && (
                    <ul className="placecard">
                        <li className="placecard-item">
                        <p className="placecard-title">{place.name}</p>
                        <img
                            src={`${base_URL}/images/${place.picture}`}
                            alt={place.description}
                            key={place.id}
                            className="placecard-image"
                        /> 
                        <p className="placecard-location">{place.location}</p>
                        <p className="placecard-description">{place.description}</p>
                        </li>
                    </ul>
                )}
            </div>
  )
}

export default SinglePlacePage;
