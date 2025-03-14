
import { useState } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarNav } from "@/components/student-dashboard/SidebarNav";
import { Dashboard } from "@/components/student-dashboard/Dashboard";

const StudentDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <Dashboard />
          <SidebarNav collapsed={collapsed} />
        </div>
      </SidebarProvider>
    </div>
  );
};

export default StudentDashboard;
