
import { Bell, AlertCircle, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const announcements = [
  {
    id: 1,
    title: "امتحانات میان‌ترم از هفته آینده آغاز می‌شود",
    date: "۱۴۰۴/۰۳/۰۸",
    category: "آموزشی",
    priority: "high",
  },
  {
    id: 2,
    title: "بازدید علمی از موزه علوم و فنون",
    date: "۱۴۰۴/۰۳/۰۵",
    category: "رویدادها",
    priority: "medium",
  },
  {
    id: 3,
    title: "تغییر ساعت کلاس‌های فوق‌برنامه",
    date: "۱۴۰۴/۰۳/۰۳",
    category: "اطلاعیه",
    priority: "low",
  },
];

const getPriorityIcon = (priority: string) => {
  switch(priority) {
    case 'high':
      return <AlertCircle className="h-5 w-5 text-red-500" />;
    case 'medium':
      return <Bell className="h-5 w-5 text-yellow-500" />;
    case 'low':
      return <MessageSquare className="h-5 w-5 text-blue-500" />;
    default:
      return <MessageSquare className="h-5 w-5 text-gray-500" />;
  }
};

export const AnnouncementsList = () => {
  return (
    <Card className="lg:col-span-1">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold">اطلاعیه‌ها</CardTitle>
          <Bell className="h-5 w-5 text-muted-foreground" />
        </div>
        <CardDescription>آخرین اطلاعیه‌های مدرسه</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[280px]">
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="rounded-lg border p-3 shadow-sm">
                <div className="flex items-start gap-3">
                  {getPriorityIcon(announcement.priority)}
                  <div className="flex-1">
                    <p className="font-medium">{announcement.title}</p>
                    <div className="flex items-center justify-between mt-2">
                      <Badge variant="outline">
                        {announcement.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{announcement.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <Button variant="ghost" className="w-full mt-4">مشاهده همه اطلاعیه‌ها</Button>
      </CardContent>
    </Card>
  );
};
