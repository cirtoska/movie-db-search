import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Movie from "./SingleMovie";
import NotFound from "./NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/movies/:id" element={<Movie />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
