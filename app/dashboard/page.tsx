import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { RecentActivities } from "@/components/dashboard/recent-activities"
import { UpcomingMaintenance } from "@/components/dashboard/upcoming-maintenance"
import { EquipmentStatusChart } from "@/components/dashboard/equipment-status-chart"
import { ProjectPipeline } from "@/components/dashboard/project-pipeline"
import Image from "next/image"

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-full w-full p-4 md:p-6 space-y-6">
      <div className="flex items-center justify-between">
        <DashboardHeader heading="Dashboard" />
        <div className="hidden md:block">
          <div className="relative h-10 w-36 md:h-12 md:w-48">
            <Image src="/images/vannevar-logo.png" alt="Vannevar Logo" fill className="object-contain" />
          </div>
        </div>
      </div>
      <DashboardStats />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="w-full min-h-[400px]">
          <EquipmentStatusChart />
        </div>
        <div className="w-full min-h-[400px]">
          <ProjectPipeline />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="w-full">
          <RecentActivities />
        </div>
        <div className="w-full">
          <UpcomingMaintenance />
        </div>
      </div>
    </div>
  )
}

