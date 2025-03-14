
import { ClipboardList } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";

const assignments = [
  {
    id: 1,
    subject: "ریاضی",
    title: "تمرین‌های فصل ۳",
    dueDate: "۱۴۰۴/۰۳/۱۵",
    status: "pending",
    progress: 0,
  },
  {
    id: 2,
    subject: "فیزیک",
    title: "گزارش آزمایش نور",
    dueDate: "۱۴۰۴/۰۳/۱۸",
    status: "in-progress",
    progress: 60,
  },
  {
    id: 3,
    subject: "شیمی",
    title: "تحقیق درباره عناصر",
    dueDate: "۱۴۰۴/۰۳/۲۰",
    status: "completed",
    progress: 100,
  },
  {
    id: 4,
    subject: "ادبیات",
    title: "خلاصه کتاب شاهنامه",
    dueDate: "۱۴۰۴/۰۳/۲۵",
    status: "in-progress",
    progress: 30,
  },
];

const getStatusBadge = (status: string) => {
  switch(status) {
    case 'pending':
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case 'in-progress':
      return "bg-blue-100 text-blue-800 border-blue-200";
    case 'completed':
      return "bg-green-100 text-green-800 border-green-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const getStatusText = (status: string) => {
  switch(status) {
    case 'pending':
      return "در انتظار شروع";
    case 'in-progress':
      return "در حال انجام";
    case 'completed':
      return "تکمیل شده";
    default:
      return "نامشخص";
  }
};

export const AssignmentsList = () => {
  return (
    <Card className="lg:col-span-1">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold">تکالیف</CardTitle>
          <ClipboardList className="h-5 w-5 text-muted-foreground" />
        </div>
        <CardDescription>تکالیف در حال انجام و پیش رو</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[280px]">
          <div className="space-y-4">
            {assignments.map((assignment) => (
              <div key={assignment.id} className="rounded-lg border p-3 shadow-sm">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium">{assignment.title}</p>
                    <p className="text-sm text-muted-foreground">{assignment.subject}</p>
                  </div>
                  <Badge variant="outline" className={getStatusBadge(assignment.status)}>
                    {getStatusText(assignment.status)}
                  </Badge>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>پیشرفت</span>
                    <span>{assignment.progress}٪</span>
                  </div>
                  <Progress value={assignment.progress} className="h-2" />
                </div>
                <div className="mt-3 text-xs text-muted-foreground flex justify-between">
                  <span>تاریخ تحویل:</span>
                  <span>{assignment.dueDate}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <Button variant="ghost" className="w-full mt-4">مشاهده همه تکالیف</Button>
      </CardContent>
    </Card>
  );
};
