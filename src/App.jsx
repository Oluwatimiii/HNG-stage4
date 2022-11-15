import { Route, Routes } from "react-router-dom";
import Home from "./components/Layout/Home";
import ScrollToTop from './components/UI/ScrollToTop'
import Navbar from "./components/UI/Navbar";
import Modal from "./components/Layout/Modal";
import { useState } from "react";
import Footer from "./components/Layout/Footer";
import Placestay from "./components/Layout/Placestay";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <ScrollToTop />
      <Navbar openModal={setOpenModal} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Placestay />} />
      </Routes>
      <Footer />
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
}

export default App;
