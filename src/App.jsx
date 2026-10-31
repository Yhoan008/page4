import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Hypnotherapy from "./pages/Hypnotherapy.jsx";
import Workshops from "./pages/Workshops.jsx";
import Resources from "./pages/Resources.jsx";
import About from "./pages/About.jsx";
import Treatments from "./pages/Treatments.jsx";
import Contact from "./pages/Contact.jsx";

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <div className="min-h-screen flex flex-col bg-cream">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hypnotherapy" element={<Hypnotherapy />} />
            <Route path="/wellness-workshops" element={<Workshops />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
