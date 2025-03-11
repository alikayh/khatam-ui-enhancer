
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-r-4 border-khatam-teal pr-3">دبیرستان خاتم نوین</h3>
            <p className="text-gray-300 leading-relaxed">
              مجموعه آموزشی خاتم نوین با هدف ارائه خدمات آموزشی با کیفیت و پرورش استعدادهای دانش‌آموزان فعالیت می‌کند.
            </p>
            <div className="flex space-x-4 space-x-reverse pt-2">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-r-4 border-khatam-teal pr-3">دسترسی سریع</h3>
            <nav className="grid grid-cols-1 gap-2">
              <a href="#" className="hover:text-khatam-teal transition-colors flex items-center">
                <span className="ml-2">›</span>صفحه اصلی
              </a>
              <a href="#announcements" className="hover:text-khatam-teal transition-colors flex items-center">
                <span className="ml-2">›</span>اطلاعیه‌ها
              </a>
              <a href="#gallery" className="hover:text-khatam-teal transition-colors flex items-center">
                <span className="ml-2">›</span>گالری تصاویر
              </a>
              <a href="#contact" className="hover:text-khatam-teal transition-colors flex items-center">
                <span className="ml-2">›</span>تماس با ما
              </a>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-r-4 border-khatam-teal pr-3">ارتباط با ما</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3 space-x-reverse">
                <MapPin className="w-5 h-5 text-khatam-teal flex-shrink-0 mt-1" />
                <span>تهران، خیابان جمالزاده، دبیرستان خاتم نوین</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="w-5 h-5 text-khatam-teal flex-shrink-0" />
                <span>۰۲۱-۶۶۵۶۵۶۵۶</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="w-5 h-5 text-khatam-teal flex-shrink-0" />
                <span>info@khatamnovin.edu</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
          <p>کلیه حقوق این وبسایت متعلق به دبیرستان خاتم نوین می‌باشد. &copy; ۱۴۰۲</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
