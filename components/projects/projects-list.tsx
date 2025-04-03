"use client"

import { useState } from "react"
import { BarChart3, Calendar, MoreHorizontal, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/hooks/use-toast"

export function ProjectsList() {
  const { toast } = useToast()
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Gulf of Mexico Drilling",
      customer: "Petromax Inc.",
      startDate: "May 10, 2025",
      endDate: "Aug 15, 2025",
      status: "Upcoming",
      equipmentNeeded: 24,
      progress: 0,
    },
    {
      id: 2,
      name: "North Sea Exploration",
      customer: "OceanRig Ltd.",
      startDate: "Jun 15, 2025",
      endDate: "Oct 30, 2025",
      status: "Planning",
      equipmentNeeded: 36,
      progress: 15,
    },
    {
      id: 3,
      name: "Permian Basin Expansion",
      customer: "Texas Energy Co.",
      startDate: "Jul 5, 2025",
      endDate: "Dec 20, 2025",
      status: "Planning",
      equipmentNeeded: 18,
      progress: 25,
    },
    {
      id: 4,
      name: "Alaska Pipeline Maintenance",
      customer: "Northern Oil Corp.",
      startDate: "Aug 12, 2025",
      endDate: "Sep 30, 2025",
      status: "Upcoming",
      equipmentNeeded: 12,
      progress: 5,
    },
    {
      id: 5,
      name: "Middle East Drilling Project",
      customer: "Global Petroleum",
      startDate: "Sep 1, 2025",
      endDate: "Feb 28, 2026",
      status: "Negotiation",
      equipmentNeeded: 42,
      progress: 10,
    },
  ])

  const approveProject = (id: number) => {
    setProjects(projects.map((project) => (project.id === id ? { ...project, status: "Approved" } : project)))
    toast({
      title: "Project Approved",
      description: `${projects.find((project) => project.id === id)?.name} has been approved.`,
    })
  }

  const cancelProject = (id: number) => {
    setProjects(projects.map((project) => (project.id === id ? { ...project, status: "Cancelled" } : project)))
    toast({
      title: "Project Cancelled",
      description: `${projects.find((project) => project.id === id)?.name} has been cancelled.`,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Pipeline</CardTitle>
        <CardDescription>View and manage upcoming drilling projects</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project Name</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Timeline</TableHead>
              <TableHead>Equipment</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell className="font-medium">{project.name}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{project.customer}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {project.startDate} - {project.endDate}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    <span>{project.equipmentNeeded} units</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <Progress value={project.progress} className="h-2" />
                    <span className="text-xs text-muted-foreground">{project.progress}% complete</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      project.status === "Approved"
                        ? "default"
                        : project.status === "Cancelled"
                          ? "destructive"
                          : "outline"
                    }
                  >
                    {project.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem onClick={() => approveProject(project.id)}>Approve Project</DropdownMenuItem>
                      <DropdownMenuItem>Edit Details</DropdownMenuItem>
                      <DropdownMenuItem>Assign Equipment</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => cancelProject(project.id)}>Cancel Project</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

