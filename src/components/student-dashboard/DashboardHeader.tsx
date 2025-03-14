
import { Bell, Search } from 'lucide-react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const DashboardHeader = () => {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center bg-white px-4 shadow-sm w-full">
      <SidebarTrigger />
      <div className="flex flex-1 items-center justify-between">
        <div className="flex items-center">
          <h2 className="text-lg font-medium mr-4">داشبورد دانش‌آموز</h2>
          <div className="relative max-w-sm hidden md:flex">
            <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="جستجو..."
              className="pr-8 w-64"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button size="icon" variant="ghost" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
              3
            </span>
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" alt="علی محمدی" />
            <AvatarFallback>ع‌م</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};
