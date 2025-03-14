
import { ChevronDown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface GradesOverviewProps {
  showFullGrades: boolean;
  setShowFullGrades: (show: boolean) => void;
}

const grades = [
  {
    subject: "ریاضی",
    score: 19.5,
    outOf: 20,
    color: "bg-blue-500",
  },
  {
    subject: "فیزیک",
    score: 18.0,
    outOf: 20,
    color: "bg-purple-500",
  },
  {
    subject: "شیمی",
    score: 17.5,
    outOf: 20,
    color: "bg-green-500",
  },
  {
    subject: "ادبیات",
    score: 19.0,
    outOf: 20,
    color: "bg-yellow-500",
  },
  {
    subject: "زبان انگلیسی",
    score: 20.0,
    outOf: 20,
    color: "bg-red-500",
  },
];

export const GradesOverview = ({ showFullGrades, setShowFullGrades }: GradesOverviewProps) => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold">نمرات اخیر</CardTitle>
          <Button variant="ghost" onClick={() => setShowFullGrades(!showFullGrades)} className="text-sm">
            {showFullGrades ? "نمایش کمتر" : "نمایش همه"}
            <ChevronDown className={`h-4 w-4 mr-1 transition-transform ${showFullGrades ? "rotate-180" : ""}`} />
          </Button>
        </div>
        <CardDescription>خلاصه نمرات دروس ترم جاری</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {grades.slice(0, showFullGrades ? grades.length : 3).map((grade, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">{grade.subject}</span>
                <span className="font-bold">{grade.score} <span className="text-sm text-muted-foreground font-normal">از {grade.outOf}</span></span>
              </div>
              <Progress value={(grade.score / grade.outOf) * 100} className={`h-2 ${grade.color}`} />
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">مشاهده کارنامه کامل</Button>
      </CardFooter>
    </Card>
  );
};
