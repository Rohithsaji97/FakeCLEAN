import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import AboutUs from "./Sources/AboutUs";
import Home from "./Sources/Home";
import Login from "./Sources/Login";
import Services from "./Sources/Services";
import ToOffer from "./Sources/ToOffer";
import ToRecieve from "./Sources/ToRecieve";
import Footer from "./Sources/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/offer" element={<ToOffer />} />
          <Route path="/recieve" element={<ToRecieve />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
