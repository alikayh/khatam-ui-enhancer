import { Clock, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const activities = [
  {
    id: 1,
    child: "علی",
    action: "تحویل تکلیف ریاضی",
    time: "۱ ساعت پیش",
    status: "completed",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    child: "علی",
    action: "غیبت در کلاس زبان",
    time: "دیروز، ۱۴:۳۰",
    status: "warning",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    child: "علی",
    action: "تأخیر در ورود به مدرسه",
    time: "۲ روز پیش",
    status: "pending",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    child: "علی",
    action: "دریافت نمره ۲۰ در ادبیات",
    time: "۳ روز پیش",
    status: "success",
    image: "/placeholder.svg"
  },
  {
    id: 7,
    child: "علی",
    action: "شرکت در آزمون شیمی",
    time: "۴ روز پیش",
    status: "success",
    image: "/placeholder.svg"
  },
];

const getStatusBadge = (status: string) => {
  switch(status) {
    case 'completed':
      return "bg-blue-100 text-blue-800 border-blue-200";
    case 'success':
      return "bg-green-100 text-green-800 border-green-200";
    case 'warning':
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case 'pending':
      return "bg-orange-100 text-orange-800 border-orange-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

export const RecentActivities = () => {
  return (
    <Card className="lg:col-span-1">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold">فعالیت‌های اخیر</CardTitle>
          <Clock className="h-5 w-5 text-muted-foreground" />
        </div>
        <CardDescription>آخرین فعالیت‌های فرزند شما</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg border shadow-sm">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={activity.image} alt={activity.child} />
                  <AvatarFallback>{activity.child.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-medium ml-1">{activity.child}</span>
                      <span className="text-sm">{activity.action}</span>
                    </div>
                    <Badge variant="outline" className={getStatusBadge(activity.status)}>
                      {activity.status === 'completed' && 'انجام شده'}
                      {activity.status === 'success' && 'موفق'}
                      {activity.status === 'warning' && 'هشدار'}
                      {activity.status === 'pending' && 'در انتظار'}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <Button variant="ghost" className="w-full mt-4">نمایش تمام فعالیت‌ها</Button>
      </CardContent>
    </Card>
  );
};
