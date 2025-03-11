
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">تماس با ما</h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            جهت دریافت اطلاعات بیشتر و ارتباط با مسئولین دبیرستان خاتم نوین می‌توانید از طرق زیر با ما در تماس باشید
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 h-full">
              <h3 className="text-xl font-bold text-khatam-blue mb-6 border-r-4 border-khatam-teal pr-3">
                اطلاعات تماس
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full ml-4">
                    <Phone className="h-6 w-6 text-khatam-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">شماره تماس</h4>
                    <p className="text-gray-600 mt-1">۰۲۱-۶۶۵۶۵۶۵۶</p>
                    <p className="text-gray-600">۰۲۱-۶۶۵۶۵۶۵۷</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full ml-4">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">ایمیل</h4>
                    <p className="text-gray-600 mt-1">info@khatamnovin.edu</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full ml-4">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">آدرس</h4>
                    <p className="text-gray-600 mt-1">تهران، خیابان جمالزاده، دبیرستان خاتم نوین</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full ml-4">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">ساعات کاری</h4>
                    <p className="text-gray-600 mt-1">شنبه تا چهارشنبه: ۸ صبح تا ۴ بعدازظهر</p>
                    <p className="text-gray-600">پنجشنبه: ۸ صبح تا ۱۲ ظهر</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-khatam-blue mb-6 border-r-4 border-khatam-teal pr-3">
                فرم تماس
              </h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      نام و نام خانوادگی
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-khatam-blue focus:border-transparent transition-all duration-200"
                      placeholder="نام و نام خانوادگی خود را وارد کنید"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      ایمیل
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-khatam-blue focus:border-transparent transition-all duration-200"
                      placeholder="ایمیل خود را وارد کنید"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    موضوع
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-khatam-blue focus:border-transparent transition-all duration-200"
                    placeholder="موضوع پیام خود را وارد کنید"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    پیام
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-khatam-blue focus:border-transparent transition-all duration-200"
                    placeholder="پیام خود را بنویسید..."
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-khatam-blue to-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-medium"
                  >
                    ارسال پیام
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="mt-12 bg-white rounded-xl shadow-md p-2 overflow-hidden opacity-0 animate-fade-in">
          <div className="relative aspect-[16/7] w-full overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.9661069929403!2d51.383134776037704!3d35.70345877259432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e01d4c5e9bf4f%3A0xd4376c4745dfd40a!2sTehran%2C%20Jamalzadeh%20St%2C%20Iran!5e0!3m2!1sen!2sus!4v1684334851816!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
