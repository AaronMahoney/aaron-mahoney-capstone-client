import { useState } from 'react';
import axios from 'axios';
import './GuideBook.scss';
import flags from "../../assets/images/flags.jpg";

const baseURL = import.meta.env.VITE_API_URL;

function GuideBook() {

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [comment, setComment] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();

    const commentData = { name, location, comment };

    try {
      const response = await axios.post(`${baseURL}/guidebook`, commentData);
      if (response.status !== 201) throw new Error("Failed to post comment");

      setName("");
      setLocation("");
      setComment("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="guidebook">
      <section className="guidebook-section">
        <h1 className="guidebook-section__title">Guidebook</h1>
        <h3 className="guidebook-section__subhead">Yes By!</h3>
        <img className="guidebook-section__image" src={flags} alt="flags" />
        <p className="guidebook-section__text">Thanks for checking out the site, hopefully you learned something.</p>
        <p className="guidebook-section__text">Feel free to leave a comment about Newfoundland, the site itself, or anything else.</p>
        <form className="guidebook-form" onSubmit={handleCommentSubmit}>
          <div className="guidebook-container">
            <label className="guidebook-form__name">Name</label>
            <input className="guidebook-form__input"
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleNameChange} />
            <label className="guidebook-form__location">Location</label>
            <input className="guidebook-form__input"
              type="text"
              name="location"
              placeholder="Location"
              value={location}
              onChange={handleLocationChange} />
            <label className="guidebook-form__comment">Comment</label>
            <textarea className="guidebook-form__area"
              type="text"
              name="comment"
              placeholder="Comment"
              value={comment}
              onChange={handleCommentChange} />
          </div>
        </form>
      </section>
    </div>
  )
}

export default GuideBook;
