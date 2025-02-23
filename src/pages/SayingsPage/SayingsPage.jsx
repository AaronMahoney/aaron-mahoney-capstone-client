import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import './SayingsPage.scss';

const baseURL = import.meta.env.VITE_API_URL;

function SayingsPage() {
  const [sayings, setSayings] = useState([]);
  const navigate = useNavigate();

  const getSayings = async () => {
    try {
      const response = await axios.get(`${baseURL}/sayings`)
      setSayings(response.data)

    } catch (error) {
      console.error("Error getting saying", error)
    }
  }

  useEffect(() => {
    getSayings()
  }, []);

  const handleClickButton = () => {
    if (sayings.length > 0) {
      const randomIndex = Math.floor(Math.random() * sayings.length);
      const randomSayingId = sayings[randomIndex].id;
      navigate(`/sayings/${randomSayingId}`);
    }
  }

  return (
    <div className="sayings">
      <h1 className="sayings-title">The Way We Speak</h1>
      <p className="sayings-subhead">Newfoundland is well known for the colourful buildings adorning the downtown area, but just as much for the colourful way that locals speak.</p>
      <p className="sayings-subhead">Below is a randomizer loaded up with many of the words and phrases locals use daily.</p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/MHB32ll7Ce8?si=y2ZIxsd-Kx3-YV2F"
        title="YouTube video player"
        allowFullScreen
      ></iframe>
      <button className="sayings-button"
        onClick={handleClickButton}>Click for a saying!</button>
    </div>
  )
}

export default SayingsPage;