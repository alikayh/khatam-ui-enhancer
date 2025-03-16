
import { useState } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarNav } from "@/components/student-dashboard/SidebarNav";
import { Dashboard } from "@/components/student-dashboard/Dashboard";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <Dashboard />
          <SidebarNav collapsed={false} />
        </div>
      </SidebarProvider>
    </div>
  );
};

export default StudentDashboard;
