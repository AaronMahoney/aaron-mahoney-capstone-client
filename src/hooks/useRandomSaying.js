import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const base_URL = import.meta.env.VITE_API_URL;

export function useRandomSaying() {

    const [sayings, setSayings] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const getSayings = async () => {
            try {
                const response = await axios.get(`${base_URL}/sayings`);
                setSayings(response.data);
            } catch (error) {
                console.error("Error getting sayings", error);
            }
        };
        getSayings();
    }, []);

    const navigateToRandomSaying = () => {
        if (sayings.length > 0) {
            const randomIndex = Math.floor(Math.random() * sayings.length);
            const randomSayingId = sayings[randomIndex].id;
            navigate(`/sayings/${randomSayingId}`);
        }
    };

    return navigateToRandomSaying;
}
