import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
