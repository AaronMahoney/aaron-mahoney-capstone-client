import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./SingleSayingPage.scss";

const baseURL = import.meta.env.VITE_API_URL;

function SingleSayingPage() {

    const { id } = useParams();
    const [saying, setSaying] = useState("");

    const fetchSaying = async (id) => {
        try {
            const response = await axios.get(`${baseURL}/sayings/${id}`);
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
                <p className="saying-details__explanation">Explanation: {saying.saying_explanation}</p>
                <p className="saying-details__used">Example: {saying.saying_used}</p>
                <img className="saying-details__image" src={saying.saying_photo} />
            </div>
        </div>
    )
}

export default SingleSayingPage;
