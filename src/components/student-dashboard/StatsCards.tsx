
import { PieChart, CheckCircle2, ClipboardList, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const StatsCards = () => {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">معدل ترم جاری</CardTitle>
          <PieChart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">۱۹.۳۰</div>
          <p className="text-xs text-muted-foreground">از ۲۰</p>
          <div className="mt-3">
            <Progress value={96.5} className="h-2" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">حضور و غیاب</CardTitle>
          <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">۹۸٪</div>
          <p className="text-xs text-muted-foreground">حضور در کلاس‌ها</p>
          <div className="mt-3">
            <Progress value={98} className="h-2" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">تکالیف انجام شده</CardTitle>
          <ClipboardList className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">۸۵٪</div>
          <p className="text-xs text-muted-foreground">تکمیل تکالیف</p>
          <div className="mt-3">
            <Progress value={85} className="h-2" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">رتبه کلاسی</CardTitle>
          <Award className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">۲</div>
          <p className="text-xs text-muted-foreground">از ۲۵ دانش‌آموز</p>
          <div className="mt-3">
            <Progress value={92} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </>
  );
};
