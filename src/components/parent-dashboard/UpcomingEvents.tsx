
import { CalendarDays, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const events = [
  {
    id: 1,
    title: "جلسه اولیا و مربیان",
    date: "۲۴ خرداد ۱۴۰۴",
    time: "۱۶:۰۰ - ۱۸:۰۰",
    type: "جلسه",
    color: "bg-purple-100 text-purple-800 border-purple-200",
  },
  {
    id: 2,
    title: "آزمون میان‌ترم علی",
    date: "۲۷ خرداد ۱۴۰۴",
    time: "۰۸:۰۰ - ۱۰:۰۰",
    type: "آزمون",
    color: "bg-red-100 text-red-800 border-red-200",
  },
  {
    id: 3,
    title: "بازدید علمی زهرا",
    date: "۳۰ خرداد ۱۴۰۴",
    time: "۰۹:۰۰ - ۱۳:۰۰",
    type: "رویداد",
    color: "bg-green-100 text-green-800 border-green-200",
  },
  {
    id: 4,
    title: "مهلت پرداخت شهریه",
    date: "۵ تیر ۱۴۰۴",
    time: "تا پایان روز",
    type: "مالی",
    color: "bg-blue-100 text-blue-800 border-blue-200",
  },
];

export const UpcomingEvents = () => {
  return (
    <Card className="lg:col-span-1">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold">رویدادهای پیش رو</CardTitle>
          <CalendarDays className="h-5 w-5 text-muted-foreground" />
        </div>
        <CardDescription>رویدادها و جلسات آینده</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="rounded-lg border p-3 shadow-sm">
                <div className="flex justify-between">
                  <Badge variant="outline" className={event.color}>
                    {event.type}
                  </Badge>
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 ml-1" />
                    <span className="text-xs text-muted-foreground">{event.date}</span>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="font-medium">{event.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <Button variant="ghost" className="w-full mt-4">مشاهده تقویم کامل</Button>
      </CardContent>
    </Card>
  );
};
