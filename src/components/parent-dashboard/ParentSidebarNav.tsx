
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  CalendarDays,
  CreditCard,
  FileClock,
  GraduationCap,
  LayoutDashboard,
  ListChecks,
  LogOut,
  MessageSquare,
  Settings,
  UserCircle,
  Users,
} from "lucide-react";
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
} from "@/components/ui/sidebar";

interface ParentSidebarNavProps {
  collapsed?: boolean;
}

const parentMenuItems = [
  {
    icon: LayoutDashboard,
    label: "داشبورد",
    active: true,
    badge: null,
  },
  {
    icon: Users,
    label: "فرزندان",
    active: false,
    badge: null,
  },
  {
    icon: GraduationCap,
    label: "پیشرفت تحصیلی",
    active: false,
    badge: null,
  },
  {
    icon: ListChecks,
    label: "تکالیف و تمرین‌ها",
    active: false,
    badge: null,
  },
  {
    icon: FileClock,
    label: "گزارش حضور و غیاب",
    active: false,
    badge: null,
  },
  {
    icon: MessageSquare,
    label: "ارتباط با معلمین",
    active: false,
    badge: "۲",
  },
  {
    icon: CalendarDays,
    label: "جلسات و رویدادها",
    active: false,
    badge: null,
  },
  {
    icon: CreditCard,
    label: "امور مالی",
    active: false,
    badge: null,
  },
  {
    icon: UserCircle,
    label: "پروفایل",
    active: false,
    badge: null,
  },
  {
    icon: Settings,
    label: "تنظیمات",
    active: false,
    badge: null,
  },
];

export const ParentSidebarNav = ({ collapsed = true }: ParentSidebarNavProps) => {
  const handleLogout = () => {
    console.log("Logging out...");
    // Add actual logout logic here
  };

  return (
    <Sidebar 
      side="right" 
      variant="floating" 
      collapsible="offcanvas" 
      className="border-r border-gray-200 shadow-lg bg-white/95 backdrop-blur-sm"
    >
      <SidebarHeader className="px-6 py-3">
        <div className="flex items-center space-x-3 space-x-reverse">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg" alt="والدین" />
            <AvatarFallback>وی</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">محمد موسوی</p>
            <p className="text-xs text-muted-foreground">والد / سرپرست</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>منوی اصلی</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {parentMenuItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <a href="#" className="flex justify-between w-full" data-active={item.active}>
                    <div className="flex items-center">
                      <item.icon className="h-5 w-5 ml-2" />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <Badge className="mr-auto" variant="destructive">
                        {item.badge}
                      </Badge>
                    )}
                  </a>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t py-3 px-6">
        <button
          onClick={handleLogout}
          className="flex w-full items-center rounded-md px-2 py-1 hover:bg-accent text-sm"
        >
          <LogOut className="h-4 w-4 ml-2" />
          <span>خروج از حساب کاربری</span>
        </button>
      </SidebarFooter>
    </Sidebar>
  );
};
