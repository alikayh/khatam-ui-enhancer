
import { useState } from "react";
import { CheckCircle2, User, KeyRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const PortalAccess = () => {
  const [activePortal, setActivePortal] = useState("students");
  
  const portals = [
    {
      id: "students",
      title: "پرتال دانش‌آموزان",
      icon: User,
      features: [
        "دسترسی به نمرات و کارنامه",
        "مشاهده تکالیف و برنامه کلاسی",
        "دریافت منابع آموزشی",
        "ارتباط با معلمین",
      ],
      path: "/student-dashboard"
    },
    {
      id: "teachers",
      title: "پرتال معلمین",
      icon: User,
      features: [
        "ثبت نمرات و حضور و غیاب",
        "ارسال تکالیف و منابع آموزشی",
        "ارتباط با والدین و دانش‌آموزان",
        "دسترسی به برنامه کلاسی",
      ],
      path: "/teacher-dashboard"
    },
    {
      id: "parents",
      title: "پرتال اولیا",
      icon: User,
      features: [
        "مشاهده نمرات و وضعیت تحصیلی",
        "اطلاع از حضور و غیاب",
        "ارتباط با معلمین و مشاوران",
        "پرداخت شهریه و هزینه‌ها",
      ],
      path: "/parent-dashboard"
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">دسترسی به پرتال‌های آموزشی</h2>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              دسترسی به سامانه‌های آموزشی برای دانش‌آموزان، اولیا و معلمین عزیز
            </p>
          </div>
          
          {/* Portal Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {portals.map((portal) => (
              <button
                key={portal.id}
                onClick={() => setActivePortal(portal.id)}
                className={cn(
                  "px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center",
                  activePortal === portal.id
                    ? "bg-khatam-blue text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
              >
                <portal.icon className="w-5 h-5 ml-2" />
                {portal.title}
              </button>
            ))}
          </div>
          
          {/* Portal Login & Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Login Form */}
            <div className="glass-card p-8 order-2 lg:order-1">
              <h3 className="text-xl font-bold text-khatam-blue mb-6 text-center">
                {portals.find(p => p.id === activePortal)?.title}
              </h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                    نام کاربری
                  </label>
                  <div className="relative">
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <User className="h-5 w-5" />
                    </div>
                    <input
                      type="text"
                      id="username"
                      className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-khatam-blue focus:border-transparent transition-all duration-200"
                      placeholder="نام کاربری خود را وارد کنید"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    رمز عبور
                  </label>
                  <div className="relative">
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <KeyRound className="h-5 w-5" />
                    </div>
                    <input
                      type="password"
                      id="password"
                      className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-khatam-blue focus:border-transparent transition-all duration-200"
                      placeholder="رمز عبور خود را وارد کنید"
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-khatam-blue focus:ring-khatam-blue border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="mr-2 block text-sm text-gray-700">
                      مرا به خاطر بسپار
                    </label>
                  </div>
                  <a href="#" className="text-sm font-medium text-khatam-blue hover:text-blue-700">
                    فراموشی رمز عبور؟
                  </a>
                </div>
                
                <Link
                  to={portals.find(p => p.id === activePortal)?.path || "#"}
                  className="w-full bg-gradient-to-r from-khatam-blue to-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-medium block text-center"
                >
                  ورود به پرتال
                </Link>
              </form>
            </div>
            
            {/* Features */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg order-1 lg:order-2">
              <h3 className="text-xl font-bold text-khatam-blue mb-6">
                امکانات {portals.find(p => p.id === activePortal)?.title}
              </h3>
              
              <ul className="space-y-4">
                {portals.find(p => p.id === activePortal)?.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-500 ml-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <div className="p-4 bg-white rounded-lg border border-blue-100">
                  <p className="text-sm text-gray-600">
                    برای دریافت نام کاربری و رمز عبور با مسئول فناوری اطلاعات مدرسه تماس حاصل فرمایید.
                  </p>
                  <p className="text-sm font-medium text-khatam-blue mt-2">
                    شماره تماس: ۰۲۱-۶۶۵۶۵۶۵۸
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortalAccess;
