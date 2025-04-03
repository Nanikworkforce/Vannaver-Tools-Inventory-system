import type React from "react"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Toaster } from "@/components/ui/toaster"
import Image from "next/image"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="relative flex min-h-screen">
        {/* Background Image */}
        <div className="fixed inset-0 z-0">
          <Image
            src="/images/pump-jack-bg.jpeg"
            alt="Oil Pump Jack Background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Sidebar */}
        <div className="relative z-10">
          <DashboardSidebar />
        </div>

        {/* Main Content */}
        <main className="relative z-10 flex-1 overflow-auto">
          <div className="min-h-screen bg-white/80 backdrop-blur-md dark:bg-gray-900/80 m-0 rounded-none md:m-4 md:rounded-xl shadow-lg">
            {children}
          </div>
        </main>
      </div>
      <Toaster />
    </SidebarProvider>
  )
}

