
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

const children = [
  {
    id: 0,
    name: "علی موسوی",
    grade: "دهم",
    className: "۱۰-الف",
    lastActivity: "۱۵ دقیقه پیش",
    image: "/placeholder.svg"
  },
  {
    id: 1,
    name: "حسین موسوی",
    grade: "یازدهم",
    className: "۱۱-ب",
    lastActivity: "۱ ساعت پیش",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "مهدی موسوی",
    grade: "دوازدهم",
    className: "۱۲-الف",
    lastActivity: "۲ ساعت پیش",
    image: "/placeholder.svg"
  }
];

interface ChildrenOverviewProps {
  selectedChild: number;
  setSelectedChild: (id: number) => void;
}

export const ChildrenOverview = ({ selectedChild, setSelectedChild }: ChildrenOverviewProps) => {
  return (
    <Card className="col-span-1 md:col-span-2 lg:col-span-2">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold">فرزندان</CardTitle>
          <Users className="h-5 w-5 text-muted-foreground" />
        </div>
        <CardDescription>فهرست فرزندان شما در مجموعه</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-full max-h-[200px]">
          <div className="space-y-4">
            {children.map((child) => (
              <div 
                key={child.id} 
                className={`flex items-start space-x-4 space-x-reverse p-3 rounded-md cursor-pointer transition-all ${
                  selectedChild === child.id ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'
                }`}
                onClick={() => setSelectedChild(child.id)}
              >
                <Avatar className="h-10 w-10 border border-gray-200">
                  <AvatarImage src={child.image} alt={child.name} />
                  <AvatarFallback>{child.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 mr-3">
                  <div className="flex justify-between">
                    <p className="font-medium">{child.name}</p>
                    <span className="text-xs text-muted-foreground">{child.lastActivity}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    کلاس {child.className} - پایه {child.grade}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
