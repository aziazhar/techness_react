// Includes
import Footer from "./components/includes/Footer";
import Header from "./components/includes/Header";
// Pages
import { Routes, Route } from "react-router-dom";

//Components
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
