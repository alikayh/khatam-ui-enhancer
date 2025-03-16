
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  Calendar, 
  ClipboardList, 
  FileText, 
  Globe, 
  GraduationCap, 
  Home, 
  LayoutDashboard, 
  LogOut, 
  MessageSquare, 
  Settings, 
  User
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

interface SidebarNavProps {
  collapsed: boolean;
}

export const SidebarNav = ({ collapsed }: SidebarNavProps) => {
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
    <Sidebar side="right" collapsible="offcanvas" className="border-r border-gray-200 shadow-lg bg-gray-100/80 backdrop-blur-sm">
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
            <SidebarMenu className="px-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild 
                    className={item.active 
                      ? "bg-blue-100 text-khatam-blue font-medium before:bg-khatam-blue" 
                      : "hover:bg-blue-50 hover:text-khatam-blue"
                    }
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
  );
};
