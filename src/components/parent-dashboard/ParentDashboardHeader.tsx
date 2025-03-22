
import { Bell, Home } from 'lucide-react';

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const ParentDashboardHeader = () => {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center bg-white px-4 shadow-sm w-full">
      <SidebarTrigger className="text-primary hover:bg-primary-50" />
      <div className="flex flex-1 items-center justify-between">
        <div className="flex items-center">
          <Home className="h-5 w-5 text-muted-foreground ml-2" />
          <span className="text-sm text-muted-foreground">پرتال اولیا / داشبورد</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
              ۲
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
  );
};
