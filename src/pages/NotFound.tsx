
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center bg-gray-50 px-4">
        <div className="glass-card p-10 max-w-lg w-full text-center">
          <div className="inline-block p-6 bg-red-100 rounded-full text-red-500 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold text-khatam-blue mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">صفحه مورد نظر یافت نشد</p>
          <a 
            href="/" 
            className="inline-flex items-center bg-khatam-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <Home className="ml-2 h-5 w-5" />
            بازگشت به صفحه اصلی
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
