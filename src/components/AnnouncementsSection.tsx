
import { useState } from "react";
import { Calendar, BookOpen, Users, Award, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const announcements = [
  {
    id: 1,
    title: "تغییرات ساعت ثبت نام دوره های تابستانی",
    category: "ثبت نام",
    date: "۱۴۰۲/۰۳/۱۰",
    icon: Calendar,
    color: "bg-red-100 text-red-800 border-red-200",
    iconColor: "text-red-500",
  },
  {
    id: 2,
    title: "برنامه امتحانات نیمسال دوم",
    category: "آموزشی",
    date: "۱۴۰۲/۰۳/۰۸",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-800 border-blue-200",
    iconColor: "text-blue-500",
  },
  {
    id: 3,
    title: "نتایج مسابقات علمی دانش آموزان",
    category: "مسابقات",
    date: "۱۴۰۲/۰۲/۲۵",
    icon: Award,
    color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    iconColor: "text-yellow-500",
  },
  {
    id: 4,
    title: "برگزاری جلسه اولیا و مربیان",
    category: "جلسات",
    date: "۱۴۰۲/۰۲/۲۰",
    icon: Users,
    color: "bg-green-100 text-green-800 border-green-200",
    iconColor: "text-green-500",
  },
  {
    id: 5,
    title: "آیین نامه انضباطی سال تحصیلی جدید",
    category: "قوانین",
    date: "۱۴۰۲/۰۲/۱۵",
    icon: FileText,
    color: "bg-purple-100 text-purple-800 border-purple-200",
    iconColor: "text-purple-500",
  },
  {
    id: 6,
    title: "برگزاری کلاس های فوق برنامه تابستان",
    category: "آموزشی",
    date: "۱۴۰۲/۰۲/۰۱",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-800 border-blue-200",
    iconColor: "text-blue-500",
  },
];

const AnnouncementsSection = () => {
  const [filter, setFilter] = useState("all");
  
  const filteredAnnouncements = filter === "all" 
    ? announcements 
    : announcements.filter(a => a.category === filter);
  
  const categories = ["all", ...new Set(announcements.map(a => a.category))];
  
  return (
    <section id="announcements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">اطلاعیه‌ها و اخبار مدرسه</h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            آخرین اخبار و اطلاعیه‌های مدرسه خاتم نوین را در این بخش مشاهده کنید
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                filter === category
                  ? "bg-khatam-blue text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              )}
            >
              {category === "all" ? "همه" : category}
            </button>
          ))}
        </div>
        
        {/* Announcements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAnnouncements.map((announcement, index) => (
            <div
              key={announcement.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden card-hover opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className={cn("p-3 rounded-full mr-4", announcement.color)}>
                    <announcement.icon className={cn("h-6 w-6", announcement.iconColor)} />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500 block mb-1">
                      {announcement.category}
                    </span>
                    <h3 className="font-bold text-lg text-gray-900">
                      {announcement.title}
                    </h3>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                  <span className="text-sm text-gray-500">{announcement.date}</span>
                  <a href="#" className="text-khatam-blue hover:text-khatam-teal text-sm font-medium transition-colors">
                    ادامه مطلب
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center text-khatam-blue hover:text-khatam-teal transition-colors font-medium"
          >
            مشاهده همه اطلاعیه‌ها
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1 rtl:rotate-180"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
