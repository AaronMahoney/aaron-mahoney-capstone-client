import './AboutPage.scss';
import rowHouses from "../../assets/images/row-houses.jpg";

function AboutPage() {
  return (
    <div className="aboutpage">
      <div className="aboutpage-container">
        <h1 className="aboutpage-title">About</h1>
        <img className="aboutpage-image" src={rowHouses} alt="row houses" />
        <p className="aboutpage-text">
          Newfoundland and Labrador is the easternmost province of Canada, comprised of the island of Newfoundland and the continental region of Labrador.
          <br /><br />
          Newfoundland and Labrador has a reputation for being friendly, warm and welcoming, fun-loving, and funny to the core.
          <br /><br />
          The people here are also known for their natural creativity, unique language, and knack for storytelling.
          <br /><br />
          Newfoundland, unbeknownst to many, is not a member of the Maritimes but rather is part of the Atlantic provinces.
        </p>
        <iframe
          src="https://www.youtube.com/embed/dG613st6tkA?si=3I8cMIrPoFWPW-Vh"
          allow="encrypted-media; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default AboutPage;
