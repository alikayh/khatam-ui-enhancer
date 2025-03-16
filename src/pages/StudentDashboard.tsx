
import { useState } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarNav } from "@/components/student-dashboard/SidebarNav";
import { Dashboard } from "@/components/student-dashboard/Dashboard";

const StudentDashboard = () => {
  // Initialize with collapsed=true so the sidebar is hidden by default
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <SidebarProvider defaultOpen={false}> {/* Set defaultOpen to false */}
        <div className="flex min-h-screen w-full">
          <Dashboard />
          <SidebarNav collapsed={collapsed} />
        </div>
      </SidebarProvider>
    </div>
  );
};

export default StudentDashboard;
