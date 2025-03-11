
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToAnnouncements = () => {
    const announcementsSection = document.getElementById("announcements");
    if (announcementsSection) {
      announcementsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/lovable-uploads/81ef1cff-7086-4e58-a703-9c360c7ea5e7.png')",
          filter: "brightness(0.8)",
        }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-khatam-blue/30 to-khatam-blue/70"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="glass-card px-6 py-10 md:px-12 md:py-16 max-w-3xl mx-auto opacity-0 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="inline-block p-4">
              <h1 className="text-3xl md:text-5xl font-nastaliq text-khatam-blue tracking-wide">
                بسم الله الرحمن الرحیم
              </h1>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-800 mb-8 leading-relaxed">
            آغاز همکاری های علمی با رضایت خداوند متعال و توکل به خدا
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="#login"
              className="w-full md:w-auto bg-gradient-to-r from-khatam-blue to-blue-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium text-lg hover:-translate-y-1"
            >
              ورود به پنل کاربری
            </a>
            <a
              href="#announcements"
              className="w-full md:w-auto bg-white text-khatam-blue px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium text-lg hover:-translate-y-1"
            >
              مشاهده اطلاعیه‌ها
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Button */}
      <button
        onClick={scrollToAnnouncements}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll Down"
      >
        <ChevronDown className="h-10 w-10" />
      </button>
    </section>
  );
};

export default HeroSection;
