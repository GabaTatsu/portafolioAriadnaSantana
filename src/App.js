import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import NotFoundPage from "./components/NotFoundPage";
import Footer from "./components/Footer";
import Series from "./pages/Series";
import { useEffect, useState } from "react";
import CineTv from "./pages/CineTv";
import Teatro from "./pages/Teatro";
import Fotos from "./pages/Fotos";
import FotosGallery from "./pages/FotosGallery";
import bookData from "./db/bookData";

function App() {
  const [windowScrollY, setWindowScrollY] = useState("relative");
  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY < 130) {
        setWindowScrollY("relative");
      } else {
        setWindowScrollY("fixed");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <BrowserRouter>
      <Header windowScrollY={windowScrollY} />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/series" element={<Series />} />
          <Route path="/cinetv" element={<CineTv />} />
          <Route path="/teatro" element={<Teatro />} />
          <Route path="/fotos" element={<Fotos />} />
          <Route
            path="/fotos/book"
            element={<FotosGallery title="BOOK" data={bookData} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
