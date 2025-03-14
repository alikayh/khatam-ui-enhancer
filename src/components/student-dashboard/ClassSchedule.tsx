
import { Clock, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const upcomingClasses = [
  {
    id: 1,
    subject: "ریاضی",
    time: "۰۸:۰۰ - ۰۹:۳۰",
    teacher: "دکتر محمدی",
    location: "کلاس ۱۰۱",
    color: "bg-blue-100 text-blue-800 border-blue-200",
  },
  {
    id: 2,
    subject: "فیزیک",
    time: "۱۰:۰۰ - ۱۱:۳۰",
    teacher: "دکتر احمدی",
    location: "آزمایشگاه",
    color: "bg-purple-100 text-purple-800 border-purple-200",
  },
  {
    id: 3,
    subject: "ادبیات",
    time: "۱۳:۰۰ - ۱۴:۳۰",
    teacher: "خانم رضایی",
    location: "کلاس ۲۰۵",
    color: "bg-green-100 text-green-800 border-green-200",
  },
];

export const ClassSchedule = () => {
  return (
    <Card className="lg:col-span-1">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold">کلاس‌های امروز</CardTitle>
          <Clock className="h-5 w-5 text-muted-foreground" />
        </div>
        <CardDescription>چهارشنبه، ۱۵ خرداد ۱۴۰۴</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {upcomingClasses.map((cls) => (
          <div key={cls.id} className="rounded-lg border p-3 shadow-sm">
            <div className="flex justify-between">
              <Badge variant="outline" className={cls.color}>
                {cls.subject}
              </Badge>
              <span className="text-sm text-muted-foreground">{cls.time}</span>
            </div>
            <div className="mt-2">
              <p className="text-sm">{cls.teacher}</p>
              <div className="flex items-center mt-1 text-xs text-muted-foreground">
                <MapPin className="ml-1 h-3 w-3" />
                {cls.location}
              </div>
            </div>
          </div>
        ))}
        <Button variant="ghost" className="w-full">مشاهده کل برنامه هفته</Button>
      </CardContent>
    </Card>
  );
};
