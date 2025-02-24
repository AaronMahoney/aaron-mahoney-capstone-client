import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./SinglePersonPage.scss"

const base_URL = import.meta.env.VITE_API_URL;

function SinglePersonPage() {
    const { personId } = useParams();

    const [person, setPerson] = useState(null)

    const getPersonById = async (id) => {
        try {
            const response = await axios.get(`${base_URL}/people/${id}`);
            setPerson(response.data)
        } catch (error) {
            console.error("Error getting person by ID", id);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        getPersonById(personId)
    }, [personId]);

    return (
        <div className="single-person__page">
            {person && (
                <ul className="personcard">
                    <li className="personcard-item">
                        <img
                            src={`${base_URL}/images/${person.picture}`}
                            alt={person.occupation}
                            key={person.id}
                            className="personcard-image"
                        />
                        <div className="personcard-content">
                            <p className="personcard-name">{person.name}</p>
                            <p className="personcard-occupation">{person.occupation}</p>
                            <div className="personcard-history">
                                {person.history.map((sentence, index) => (
                                    <p key={index}>{sentence}</p>
                                ))}
                            </div>
                        </div>
                    </li>
                </ul>
            )}
        </div>
    )
}

export default SinglePersonPage;
