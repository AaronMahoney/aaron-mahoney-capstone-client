import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './GuideBook.scss';
import flags from "../../assets/images/flags.jpg";

const baseURL = import.meta.env.VITE_API_URL;

function GuideBook() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

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

    if (!name || !location || !comment) {
      toast.error("All fields are required!");
      return;
    }

    const commentData = { name, location, comment };

    try {
      const response = await axios.post(`${baseURL}/guidebook`, commentData);
      if (response.status !== 201) throw new Error("Failed to post comment");

      setName("");
      setLocation("");
      setComment("");
      toast.success("Comment posted successfully!");
    } catch (error) {
      console.error("Error posting comment:", error);
      toast.error("Error posting comment.");
    }
  };

  useEffect(() => {
    axios.get(`${baseURL}/guidebook/comments`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });
  }, []);

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
            <button className="guidebook-form__button">Submit</button>
          </div>
        </form>
      </section>
      <section className="comments-section">
        <h2 className="comments-section__title">Comments:</h2>
        {comments.length > 0 ? (
          <ul className="comments-section__list">
            {comments.map((comment, index) => (
              <li key={index} className="comment">
                <div className="comment-container">
                  <p className="comment-name">{comment.name}</p>
                  <p className="comment-from">from</p>
                  <p className="comment-location">{comment.location}:</p>
                </div>
                <p className="comment-text">{comment.comment}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments yet. Be the first to leave one!</p>
        )}
      </section>
      <ToastContainer />
    </div>
  );
}

export default GuideBook;