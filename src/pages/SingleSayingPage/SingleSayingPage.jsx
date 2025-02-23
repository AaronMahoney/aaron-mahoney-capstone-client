import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./SingleSayingPage.scss";
import { useRandomSaying } from "../../hooks/useRandomSaying.js";

const base_URL = import.meta.env.VITE_API_URL;

function SingleSayingPage() {

    const { id } = useParams();
    const [saying, setSaying] = useState("");
    const navigateToRandomSaying = useRandomSaying();

    const fetchSaying = async (id) => {
        try {
            const response = await axios.get(`${base_URL}/sayings/${id}`);
            setSaying(response.data);
        } catch (err) {
            console.error("Failed to fetch sayings:", err);
        }
    };

    useEffect(() => {
        fetchSaying(id);
    }, [id]);

    return (
        <div className="saying-details">
            <div className="saying-details__card">
                <h2 className="saying-details__title">{saying.saying_title}</h2>
                <div className="saying-details__text">
                    <p className="saying-details__explanation">Explanation: {saying.saying_explanation}</p>
                    <p className="saying-details__used">Example: {saying.saying_used}</p>
                </div>
                <img className="saying-details__image" src={`${base_URL}/images/${saying.saying_photo}`} />
                <button className="saying-details__button" onClick={navigateToRandomSaying}>
                    Get Another Saying!
                </button>
            </div>
        </div>
    )
}

export default SingleSayingPage;
