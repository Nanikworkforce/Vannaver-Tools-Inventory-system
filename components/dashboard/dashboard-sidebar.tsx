"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Building2,
  Calendar,
  Home,
  Settings,
  User,
  FileText,
  Boxes,
  Timer,
  Wrench,
  FolderOpen,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DashboardSidebar() {
  const pathname = usePathname()

  const menuItems = [
    {
      title: "Overview",
      icon: Home,
      href: "/dashboard",
    },
    {
      title: "Inventory Management",
      icon: Boxes,
      href: "/dashboard/equipment/",
    },
    {
      title: "Tool Monitoring",
      icon: Timer,
      href: "/dashboard/tool-monitoring",
    },
    {
      title: "Tools",
      icon: Wrench,
      href: "/dashboard/tools",
    },
    {
      title: "Open",
      icon: FolderOpen,
      href: "/dashboard/open",
    },
    {
      title: "Maintenance",
      icon: Calendar,
      href: "/dashboard/maintenance",
    },
    {
      title: "Project Pipeline",
      icon: BarChart3,
      href: "/dashboard/projects",
    },
    // {
    //   title: "Item Page",
    //   icon: BarChart3,
    //   href: "/dashboard/item-page",
    // },
    {
      title: "Job Request",
      icon: FileText,
      href: "/dashboard/job-request",
    },
    {
      title: "Customers",
      icon: Building2,
      href: "/dashboard/customers",
    },
    {
      title: "Profile",
      icon: User,
      href: "/dashboard/profile",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
    },
  ]

  return (
    <Sidebar variant="floating">
      <SidebarHeader className="border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="relative h-10 w-12">
            <Image src="/images/vannevar-logo.png" alt="Vannevar Logo" fill className="object-contain" />
          </div>
          <span className="font-bold text-lg">Vannevar</span>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton 
                asChild 
                isActive={pathname === item.href} 
                tooltip={item.title}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
        <div className="p-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder.svg" alt="Nii Ahene Nunoo" />
                  <AvatarFallback>NAN</AvatarFallback>
                </Avatar>
                <span>Nii Ahene Nunoo</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

