
import { useState, useEffect } from "react";
import { Menu, X, Clock, User, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 space-x-reverse">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-khatam-blue" />
              ) : (
                <Menu className="h-6 w-6 text-khatam-blue" />
              )}
            </button>
            <div className="flex items-center">
              <span className="text-xl font-bold text-khatam-blue">دبیرستان خاتم نوین جمالزاده</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 space-x-reverse">
            <a href="#" className="nav-link">صفحه اصلی</a>
            <a href="#announcements" className="nav-link">اطلاعیه‌ها</a>
            <a href="#gallery" className="nav-link">گالری تصاویر</a>
            <a href="#contact" className="nav-link">تماس با ما</a>
          </nav>

          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="hidden md:flex items-center text-khatam-gray">
              <Clock className="h-4 w-4 ml-1" />
              <span className="text-sm">
                {currentTime.toLocaleTimeString("fa-IR")}
              </span>
            </div>
            <a
              href="#login"
              className="hidden md:flex items-center text-white bg-khatam-blue px-4 py-2 rounded-full hover:bg-blue-800 transition-colors duration-300"
            >
              <User className="h-4 w-4 ml-1" />
              <span>ورود به سایت</span>
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden absolute right-0 left-0 bg-white shadow-lg transition-all duration-300 origin-top",
            isMenuOpen
              ? "scale-y-100 opacity-100"
              : "scale-y-0 opacity-0 pointer-events-none"
          )}
        >
          <nav className="flex flex-col py-4 px-4">
            <a
              href="#"
              className="py-3 px-4 hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              صفحه اصلی
            </a>
            <a
              href="#announcements"
              className="py-3 px-4 hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              اطلاعیه‌ها
            </a>
            <a
              href="#gallery"
              className="py-3 px-4 hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              گالری تصاویر
            </a>
            <a
              href="#contact"
              className="py-3 px-4 hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              تماس با ما
            </a>
            <a
              href="#login"
              className="mt-2 text-center bg-khatam-blue text-white py-3 px-4 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              ورود به سایت
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
