
import { useState } from 'react';
import { CreditCard, Download } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const payments = [
  {
    id: 1,
    title: "شهریه ترم دوم",
    amount: "۱۵,۰۰۰,۰۰۰",
    date: "۱۰ اسفند ۱۴۰۳",
    status: "پرداخت شده",
    color: "bg-green-100 text-green-800 border-green-200",
  },
  {
    id: 2,
    title: "هزینه سرویس رفت و آمد",
    amount: "۳,۵۰۰,۰۰۰",
    date: "۵ فروردین ۱۴۰۴",
    status: "پرداخت شده",
    color: "bg-green-100 text-green-800 border-green-200",
  },
  {
    id: 3,
    title: "اردوی علمی",
    amount: "۹۵۰,۰۰۰",
    date: "۲۰ اردیبهشت ۱۴۰۴",
    status: "پرداخت شده",
    color: "bg-green-100 text-green-800 border-green-200",
  },
  {
    id: 4,
    title: "شهریه ترم تابستان",
    amount: "۸,۰۰۰,۰۰۰",
    date: "۵ تیر ۱۴۰۴",
    status: "در انتظار",
    color: "bg-yellow-100 text-yellow-800 border-yellow-200",
  },
];

const upcomingPayments = [
  {
    id: 1,
    title: "شهریه ترم تابستان",
    amount: "۸,۰۰۰,۰۰۰",
    dueDate: "۵ تیر ۱۴۰۴",
    remainingDays: "۲۰ روز مانده",
  },
  {
    id: 2,
    title: "هزینه کتاب‌های کمک آموزشی",
    amount: "۱,۲۰۰,۰۰۰",
    dueDate: "۱۵ تیر ۱۴۰۴",
    remainingDays: "۳۰ روز مانده",
  },
];

export const FinancialOverview = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold">نمای کلی مالی</CardTitle>
          <CreditCard className="h-5 w-5 text-muted-foreground" />
        </div>
        <CardDescription>خلاصه وضعیت مالی و پرداخت‌ها</CardDescription>
      </CardHeader>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="px-6">
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger value="upcoming">پرداخت‌های پیش رو</TabsTrigger>
            <TabsTrigger value="history">سوابق پرداخت</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="upcoming" className="mt-2">
          <CardContent>
            <div className="space-y-4">
              {upcomingPayments.map((payment) => (
                <div key={payment.id} className="rounded-lg border p-4">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-medium">{payment.title}</p>
                    <span className="text-sm font-bold">ریال {payment.amount}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>مهلت پرداخت: {payment.dueDate}</span>
                      <span>{payment.remainingDays}</span>
                    </div>
                    <Button size="sm" className="w-full">پرداخت</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </TabsContent>

        <TabsContent value="history">
          <CardContent>
            <div className="space-y-4">
              {payments.map((payment) => (
                <div key={payment.id} className="flex items-center justify-between p-3 rounded-lg border">
                  <div>
                    <p className="font-medium">{payment.title}</p>
                    <p className="text-xs text-muted-foreground">{payment.date}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold">ریال {payment.amount}</span>
                    <Badge variant="outline" className={payment.color}>
                      {payment.status}
                    </Badge>
                    {payment.status === "پرداخت شده" && (
                      <Button variant="ghost" size="icon" className="h-7 w-7">
                        <Download className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </TabsContent>
      </Tabs>

      <CardFooter className="flex justify-between border-t p-4">
        <div>
          <p className="text-sm text-muted-foreground">مجموع پرداخت‌های انجام شده</p>
          <p className="font-bold">ریال ۱۹,۴۵۰,۰۰۰</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">مانده قابل پرداخت</p>
          <p className="font-bold text-yellow-600">ریال ۹,۲۰۰,۰۰۰</p>
        </div>
      </CardFooter>
    </Card>
  );
};
