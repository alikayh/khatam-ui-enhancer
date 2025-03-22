
import { Card, CardContent } from "@/components/ui/card";
import { UserCircle } from "lucide-react";

export const WelcomeParentCard = () => {
  return (
    <Card className="col-span-1 md:col-span-2 bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">خوش آمدید، محمد موسوی</h2>
            <p className="text-blue-100 mb-4">
              به پرتال اولیا خوش آمدید. در اینجا می‌توانید پیشرفت تحصیلی فرزندان خود را دنبال کنید.
            </p>
            <div className="mt-4 text-sm text-blue-100 border-t border-blue-400 pt-3">
              <p>آخرین بازدید: چهارشنبه، ۰۸ خرداد ۱۴۰۴ - ساعت ۱۰:۳۰</p>
            </div>
          </div>
          <UserCircle className="h-16 w-16 text-white/80" />
        </div>
      </CardContent>
    </Card>
  );
};
