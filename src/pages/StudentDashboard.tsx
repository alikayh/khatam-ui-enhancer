import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  Calendar, 
  ChevronDown, 
  ClipboardList, 
  Clock, 
  FileText, 
  Globe, 
  GraduationCap, 
  Home, 
  LayoutDashboard, 
  LogOut, 
  MessageSquare, 
  Settings, 
  User,
  Bell,
  CheckCircle2,
  AlertCircle,
  PieChart,
  Award,
  MapPin
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";

const menuItems = [
  {
    title: "داشبورد",
    url: "#",
    icon: LayoutDashboard,
    active: true,
  },
  {
    title: "برنامه درسی",
    url: "#",
    icon: Calendar,
  },
  {
    title: "تکالیف",
    url: "#",
    icon: ClipboardList,
  },
  {
    title: "دروس",
    url: "#",
    icon: BookOpen,
  },
  {
    title: "امتحانات",
    url: "#",
    icon: FileText,
  },
  {
    title: "پیام‌ها",
    url: "#",
    icon: MessageSquare,
    badge: 3,
  },
  {
    title: "مشاور تحصیلی",
    url: "#",
    icon: GraduationCap,
  },
  {
    title: "کتابخانه",
    url: "#",
    icon: Globe,
  },
  {
    title: "تنظیمات",
    url: "#",
    icon: Settings,
  },
];

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

const StudentDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [showFullGrades, setShowFullGrades] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogout = () => {
    toast({
      title: "خروج از سیستم",
      description: "شما با موفقیت از سیستم خارج شدید",
    });
    setTimeout(() => navigate('/'), 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <Sidebar className="border-l border-gray-200">
            <SidebarHeader className="px-6 py-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg" alt="علی محمدی" />
                  <AvatarFallback className="bg-khatam-blue text-white">ع‌م</AvatarFallback>
                </Avatar>
                <div className={`transition-opacity ${collapsed ? 'opacity-0' : 'opacity-100'}`}>
                  <h3 className="text-sm font-medium">علی محمدی</h3>
                  <p className="text-xs text-muted-foreground">پایه دهم - کلاس ۱۰۱</p>
                </div>
              </div>
            </SidebarHeader>
            
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {menuItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild 
                          className={item.active ? "bg-blue-50 text-khatam-blue font-medium before:bg-khatam-blue" : ""}
                        >
                          <a href={item.url} className="flex justify-between w-full">
                            <div className="flex items-center">
                              <item.icon className="h-5 w-5 ml-2" />
                              <span>{item.title}</span>
                            </div>
                            {item.badge && (
                              <Badge variant="destructive" className="mr-auto">
                                {item.badge}
                              </Badge>
                            )}
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            
            <SidebarFooter>
              <Button variant="ghost" onClick={handleLogout} className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                <LogOut className="h-5 w-5 ml-2" />
                <span>خروج</span>
              </Button>
            </SidebarFooter>
          </Sidebar>
          
          <div className="flex-1 overflow-auto">
            <header className="sticky top-0 z-30 flex h-16 items-center bg-white px-4 shadow-sm">
              <SidebarTrigger />
              <div className="flex flex-1 items-center justify-between">
                <div className="flex items-center">
                  <Home className="h-5 w-5 text-muted-foreground ml-2" />
                  <span className="text-sm text-muted-foreground">پرتال دانش‌آموزان / داشبورد</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
                      ۳
                    </span>
                  </Button>
                  
                  <Separator orientation="vertical" className="h-6" />
                  
                  <div className="text-sm">
                    <p className="font-medium">چهارشنبه، ۱۵ خرداد ۱۴۰۴</p>
                    <p className="text-xs text-muted-foreground">ترم دوم - هفته ۱۲</p>
                  </div>
                </div>
              </div>
            </header>

            <main className="flex-1 p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="col-span-full bg-gradient-to-r from-khatam-blue/90 to-blue-500 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl">خوش آمدید، علی محمدی!</CardTitle>
                    <CardDescription className="text-white/80">
                      امروز چهارشنبه، ۱۵ خرداد ۱۴۰۴
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>شما ۲ تکلیف در حال انجام و ۳ اطلاعیه جدید دارید.</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" className="bg-white/20 hover:bg-white/30 text-white border-white/20">
                      مشاهده تکالیف
                    </Button>
                    <Button variant="outline" className="bg-white/20 hover:bg-white/30 text-white border-white/20">
                      مشاهده پیام‌ها
                    </Button>
                  </CardFooter>
                </Card>

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
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              </div>
              
              <div className="grid grid-cols-1 gap-6">
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
              </div>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default StudentDashboard;
