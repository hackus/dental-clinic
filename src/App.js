import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import PageLoader from "./pages/PageLoader";

function App() {
  return (
    <Router>
      <div className="h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 bg-gray-50">
          <PageLoader>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dental-clinic" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </PageLoader>
        </main>
        <footer className="h-6 bg-blue-400 text-white text-center shadow-sm flex items-center justify-center rounded-lg">
          © {new Date().getFullYear()} Dental Clinic. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;