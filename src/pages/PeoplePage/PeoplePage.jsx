import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './PeoplePage.scss';
import flag1 from "../../assets/images/flag1.png";

const base_URL = import.meta.env.VITE_API_URL;

function PeoplePage() {

  const [people, setPeople] = useState([]);

  const getPeople = async () => {
    try {
      const response = await axios.get(`${base_URL}/people/`);
      setPeople(response.data)

    } catch (error) {
      console.error("Error getting places", error)
    }
  }

  useEffect(() => {
    getPeople()
  }, [])

  return (
    <div className="peoplepage">
      <h1 className="peoplepage-title">The People</h1>
      <img className="peoplepage-image" src={flag1} alt="old newfoundland flag" />
      <p className="peoplepage-text">For one of the smaller provinces, Newfoundland has produced a number of notable musicians, actors, athletes, media personalites and politicians in its time. Below are just a few!</p>
      <ul className="peoplepage-list">
        {people.map((person) => {
          return (
            <li key={person.id} className="peoplepage-list__item">
              <Link to={`/people/${person.id}`}><div className="peoplepage-list__content">
                <p className="peoplepage-list__name">{person.name}</p></div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PeoplePage;
