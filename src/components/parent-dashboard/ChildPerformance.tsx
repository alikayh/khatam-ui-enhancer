
import { ChevronDown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const childrenPerformance = [
  {
    id: 0,
    name: "علی موسوی",
    subjects: [
      {
        name: "ریاضی",
        score: 18.5,
        outOf: 20,
        lastTest: "۹۸٪",
        color: "bg-blue-500"
      },
      {
        name: "فیزیک",
        score: 19.0,
        outOf: 20,
        lastTest: "۹۵٪",
        color: "bg-green-500"
      },
      {
        name: "شیمی",
        score: 17.5,
        outOf: 20,
        lastTest: "۸۵٪",
        color: "bg-yellow-500"
      },
      {
        name: "ادبیات",
        score: 20.0,
        outOf: 20,
        lastTest: "۱۰۰٪",
        color: "bg-purple-500"
      }
    ]
  }
];

interface ChildPerformanceProps {
  selectedChild: number;
}

export const ChildPerformance = ({ selectedChild }: ChildPerformanceProps) => {
  const child = childrenPerformance.find(c => c.id === selectedChild) || childrenPerformance[0];

  return (
    <Card className="lg:col-span-1">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold">عملکرد تحصیلی</CardTitle>
          <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">
            {child.name}
          </Badge>
        </div>
        <CardDescription>نمرات و عملکرد در دروس مختلف</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {child.subjects.map((subject, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">{subject.name}</span>
                <div className="flex items-center">
                  <span className="text-sm text-muted-foreground ml-1">/ {subject.outOf}</span>
                  <span className="font-bold">{subject.score}</span>
                </div>
              </div>
              <div className="flex items-center">
                <Progress value={(subject.score / subject.outOf) * 100} className={`h-2 flex-grow ${subject.color}`} />
                <span className="text-xs text-muted-foreground ml-2 w-10 text-left">{subject.lastTest}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
