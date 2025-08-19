import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import PageLoader from "./pages/PageLoader";

function App() {

//  const [loading, setLoading] = useState(true);
//
//  useEffect(() => {
//    // Option 1: Wait for window load (but ensure fallback)
//    const handleLoad = () => setLoading(false);
//    window.addEventListener("load", handleLoad);
//
//    // Option 2: Fallback in case "load" already fired
//    const timeout = setTimeout(() => setLoading(false), 2000); // 1s fallback
//
//    return () => {
//      window.removeEventListener("load", handleLoad);
//      clearTimeout(timeout);
//    };
//  }, []);
//
//  if (loading) {
//    return (
//      <div className="min-h-screen flex items-center justify-center bg-gray-50">
//        <div className="flex flex-col items-center space-y-4">
//          {/* Spinner */}
//          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
//          <p className="text-gray-600 font-medium">Loading...</p>
//        </div>
//      </div>
//    );
//  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 p-6 bg-gray-50">
          <PageLoader>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dental-clinic" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </PageLoader>
        </main>
        <footer className="p-2 bg-blue-400 text-white text-center rounded-lg shadow-sm">
          © {new Date().getFullYear()} Dental Clinic. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;