import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PageLoader({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Trigger loading when route changes
    setLoading(true);

    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      // If already loaded (fast navigation)
      setTimeout(() => setLoading(false), 500);
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Cleanup
    return () => window.removeEventListener("load", handleLoad);
  }, [location.pathname]); // <-- runs every time the route changes

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  return children;
}
