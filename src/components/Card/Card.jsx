import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import "./Card.scss";

const base_URL = import.meta.env.VITE_API_URL;

function Card() {

    const [places, setPlaces] = useState([]);

    const getPlaces = async () => {
        try {
            const response = await axios.get(`${base_URL}/places/`);
            setPlaces(response.data)

        } catch (error) {
            console.error("Error getting places", error)
        }
    }

    useEffect(() => {
        getPlaces()
    }, [])

    return (
        <ul className="card">
            {places.map((place) => {
                return (
                    <li key={place.id} className="card-item">
                        <Link to={`/places/${place.id}`}><div className="card-content">
                        <p className="card-name">{place.name}</p>
                            <img
                                src={`${base_URL}/images/${place.picture}`}
                                alt={place.description}
                                key={place.id}
                                className="card-image"
                            />
                        </div>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default Card;