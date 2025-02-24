import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import PlacesPage from "./pages/PlacesPage/PlacesPage.jsx";
import SinglePlacePage from './pages/SinglePlacePage/SinglePlacePage.jsx';
import SayingsPage from './pages/SayingsPage/SayingsPage.jsx';
import SingleSayingPage from './pages/SingleSayingPage/SingleSayingPage.jsx';
import PeoplePage from './pages/PeoplePage/PeoplePage.jsx';
import SinglePersonPage from './pages/SinglePersonPage/SinglePersonPage.jsx';
import GuideBook from './pages/GuideBook/GuideBook.jsx';
import Footer from "./components/Footer/Footer.jsx";


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/places" element={<PlacesPage />} />
        <Route path="/places/:placeId" element={<SinglePlacePage />} />
        <Route path="/sayings" element={<SayingsPage />} />
        <Route path="/sayings/:id" element={<SingleSayingPage />} />
        <Route path="/people" element={<PeoplePage />} /> 
        <Route path="/people/:personId" element={<SinglePersonPage />} />
        <Route path="/guidebook" element={<GuideBook />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
