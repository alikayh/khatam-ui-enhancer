
import { BookOpen, Users, Clock, Award, BookMarked, CalendarDays } from "lucide-react";

const features = [
  {
    id: 1,
    title: "تیم آموزشی مجرب",
    description: "کادر آموزشی با تجربه و متخصص در خدمت دانش‌آموزان عزیز",
    icon: BookOpen,
    color: "text-blue-600 bg-blue-100",
  },
  {
    id: 2,
    title: "کلاس‌های کم جمعیت",
    description: "برگزاری کلاس‌ها با تعداد محدود دانش‌آموز برای آموزش بهتر",
    icon: Users,
    color: "text-green-600 bg-green-100",
  },
  {
    id: 3,
    title: "برنامه‌های فوق برنامه",
    description: "ارائه کلاس‌های متنوع هنری، ورزشی و علمی در کنار دروس اصلی",
    icon: Clock,
    color: "text-purple-600 bg-purple-100",
  },
  {
    id: 4,
    title: "مشاوره تحصیلی",
    description: "ارائه خدمات مشاوره‌ای توسط مشاوران مجرب آموزشی",
    icon: BookMarked,
    color: "text-red-600 bg-red-100",
  },
  {
    id: 5,
    title: "تقویم آموزشی منظم",
    description: "برنامه‌ریزی دقیق تحصیلی در طول سال برای پیشرفت دانش‌آموزان",
    icon: CalendarDays,
    color: "text-yellow-600 bg-yellow-100",
  },
  {
    id: 6,
    title: "موفقیت‌های چشمگیر",
    description: "کسب رتبه‌های برتر در آزمون‌های ورودی دانشگاه‌ها و المپیادها",
    icon: Award,
    color: "text-teal-600 bg-teal-100",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">ویژگی‌های دبیرستان خاتم نوین</h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            دبیرستان خاتم نوین با بهره‌گیری از روش‌های نوین آموزشی، محیطی پویا و مطلوب برای دانش‌آموزان فراهم کرده است
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg border border-gray-100 opacity-0 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start">
                <div className={`p-3 rounded-full ${feature.color} mr-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
