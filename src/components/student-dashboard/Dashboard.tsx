
import { useState } from 'react';
import { 
  Bell, 
  Home, 
  Separator 
} from 'lucide-react';

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Separator as SeparatorComponent } from "@/components/ui/separator";
import { DashboardHeader } from './DashboardHeader';
import { WelcomeCard } from './WelcomeCard';
import { StatsCards } from './StatsCards';
import { ClassSchedule } from './ClassSchedule';
import { AssignmentsList } from './AssignmentsList';
import { AnnouncementsList } from './AnnouncementsList';
import { GradesOverview } from './GradesOverview';

export const Dashboard = () => {
  const [showFullGrades, setShowFullGrades] = useState(false);

  return (
    <div className="flex-1 overflow-auto">
      <DashboardHeader />

      <main className="flex-1 p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <WelcomeCard />
          <StatsCards />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ClassSchedule />
          <AssignmentsList />
          <AnnouncementsList />
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <GradesOverview showFullGrades={showFullGrades} setShowFullGrades={setShowFullGrades} />
        </div>
      </main>
    </div>
  );
};
