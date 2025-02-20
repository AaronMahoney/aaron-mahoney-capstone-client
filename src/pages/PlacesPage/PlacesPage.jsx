import './PlacesPage.scss';
import Card from "../../components/Card/Card.jsx";

function PlacesPage() {
  return (
    <div className="placespage">
      <h1 className="placespage-title">Places to see</h1>
      <p className="placespage-subhead">Take in the sights!</p>
      <Card />
    </div>
  )
}

export default PlacesPage;
