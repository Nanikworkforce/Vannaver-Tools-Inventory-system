"use client"

import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PlusCircle, Building2 } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      name: "Permian Basin",
      location: "Texas and New Mexico",
      customer: "XTO",
      status: "Active",
      startDate: "2024-01-15",
      endDate: "2024-06-30",
    },
    {
      id: 2,
      name: "Bakken Formation",
      location: "North Dakota and Montana",
      customer: "Chevron",
      status: "Planning",
      startDate: "2024-03-01",
      endDate: "2024-08-15",
    },
    {
      id: 3,
      name: "Eagle Ford Shale",
      location: "South Texas",
      customer: "Hess",
      status: "Active",
      startDate: "2024-02-01",
      endDate: "2024-07-31",
    },
    {
      id: 4,
      name: "Anadarko Basin",
      location: "Oklahoma and Texas Panhandle",
      customer: "Devon",
      status: "Upcoming",
      startDate: "2024-04-01",
      endDate: "2024-09-30",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge variant="success">{status}</Badge>
      case "Planning":
        return <Badge variant="secondary">{status}</Badge>
      case "Upcoming":
        return <Badge variant="warning">{status}</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <DashboardShell>
      <div className="flex items-center justify-between px-2">
        <div className="grid gap-1">
          <h1 className="font-heading text-3xl md:text-4xl">Project Pipeline</h1>
          <p className="text-lg text-muted-foreground">
            Track and manage ongoing and upcoming projects.
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>
      
      <div className="mt-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell className="font-medium">{project.name}</TableCell>
                <TableCell>{project.location}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Building2 className="mr-2 h-4 w-4 text-muted-foreground" />
                    {project.customer}
                  </div>
                </TableCell>
                <TableCell>{getStatusBadge(project.status)}</TableCell>
                <TableCell>{project.startDate}</TableCell>
                <TableCell>{project.endDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </DashboardShell>
  )
}

