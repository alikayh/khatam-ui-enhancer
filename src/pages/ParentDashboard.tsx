
import { useState } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { ParentSidebarNav } from "@/components/parent-dashboard/ParentSidebarNav";
import { ParentDashboardContent } from "@/components/parent-dashboard/ParentDashboardContent";

const ParentDashboard = () => {
  // Initialize with collapsed=true so the sidebar is hidden by default
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <SidebarProvider defaultOpen={false}>
        <div className="flex min-h-screen w-full">
          <ParentDashboardContent />
          <ParentSidebarNav collapsed={collapsed} />
        </div>
      </SidebarProvider>
    </div>
  );
};

export default ParentDashboard;
