
import { useState } from 'react';
import { ParentDashboardHeader } from './ParentDashboardHeader';
import { WelcomeParentCard } from './WelcomeParentCard';
import { ChildrenOverview } from './ChildrenOverview';
import { UpcomingEvents } from './UpcomingEvents';
import { ChildPerformance } from './ChildPerformance';
import { RecentActivities } from './RecentActivities';
import { FinancialOverview } from './FinancialOverview';

export const ParentDashboardContent = () => {
  const [selectedChild, setSelectedChild] = useState(0);

  return (
    <div className="flex-1 w-full flex flex-col overflow-auto">
      <ParentDashboardHeader />

      <main className="flex-1 p-6 space-y-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <WelcomeParentCard />
          <ChildrenOverview 
            selectedChild={selectedChild} 
            setSelectedChild={setSelectedChild} 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ChildPerformance selectedChild={selectedChild} />
          <UpcomingEvents />
          <RecentActivities />
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <FinancialOverview />
        </div>
      </main>
    </div>
  );
};
