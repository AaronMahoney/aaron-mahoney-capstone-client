import './MainPage.scss';
import Map from "../../components/Map/Map.jsx";

function MainPage() {
  return (
    <div className="mainpage">
      <section className="hero">
        <h1 className="hero-header">The Rock</h1>
        <h2 className="hero-subheader">Newfoundland and Labrador</h2>
      </section>
      <section className="map-container">
        <Map />
      </section>
    </div>
  );
}

export default MainPage;