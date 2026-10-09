import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import BookingModal from './components/BookingModal.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Calculator from './pages/Calculator.jsx';
import Reviews from './pages/Reviews.jsx';
import './App.css';

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  useEffect(() => {
    document.title = 'Vova.Style — თმის სტილის სტუდია';
  }, []);

  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="hair-studio-app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <BookingModal />
    </BrowserRouter>
  );
}
