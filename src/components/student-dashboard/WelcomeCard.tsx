
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const WelcomeCard = () => {
  return (
    <Card className="col-span-full bg-gradient-to-r from-khatam-blue/90 to-blue-500 text-white">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">خوش آمدید، علی محمدی!</CardTitle>
        <CardDescription className="text-white/80">
          امروز چهارشنبه، ۱۵ خرداد ۱۴۰۴
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-base md:text-lg">شما ۲ تکلیف در حال انجام و ۳ اطلاعیه جدید دارید.</p>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-2 sm:justify-between">
        <Button variant="outline" className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white border-white/20">
          مشاهده تکالیف
        </Button>
        <Button variant="outline" className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white border-white/20">
          مشاهده پیام‌ها
        </Button>
      </CardFooter>
    </Card>
  );
};
