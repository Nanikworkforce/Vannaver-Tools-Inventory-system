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
import { PlusCircle, AlertCircle, CheckCircle2, Clock } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MaintenancePage() {
  // This would typically come from your database
  const maintenanceTasks = [
    {
      id: 1,
      equipment: "360° Camera Pro X1",
      type: "Preventive",
      status: "Scheduled",
      dueDate: "2024-03-15",
      assignedTo: "John Smith",
      priority: "High",
    },
    {
      id: 2,
      equipment: "3D Scanner Elite",
      type: "Repair",
      status: "In Progress",
      dueDate: "2024-02-28",
      assignedTo: "Sarah Johnson",
      priority: "Critical",
    },
    {
      id: 3,
      equipment: "AR Development Kit",
      type: "Calibration",
      status: "Completed",
      dueDate: "2024-02-20",
      assignedTo: "Mike Brown",
      priority: "Medium",
    },
  ]

  const workflows = [
    {
      id: 1,
      name: "Camera Setup and Calibration",
      steps: "8 steps",
      lastUpdated: "2024-02-15",
      category: "360° Cameras",
      status: "Active",
    },
    {
      id: 2,
      name: "3D Scanning Protocol",
      steps: "12 steps",
      lastUpdated: "2024-02-10",
      category: "3D Modeling",
      status: "Under Review",
    },
    {
      id: 3,
      name: "AR Equipment Maintenance",
      steps: "6 steps",
      lastUpdated: "2024-02-01",
      category: "AR Solutions",
      status: "Active",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Scheduled":
        return <Badge variant="outline"><Clock className="mr-1 h-3 w-3" />{status}</Badge>
      case "In Progress":
        return <Badge variant="secondary">{status}</Badge>
      case "Completed":
        return <Badge variant="secondary"><CheckCircle2 className="mr-1 h-3 w-3" />{status}</Badge>
      case "Active":
        return <Badge variant="secondary">{status}</Badge>
      case "Under Review":
        return <Badge variant="warning"><AlertCircle className="mr-1 h-3 w-3" />{status}</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "Critical":
        return <Badge variant="destructive">{priority}</Badge>
      case "High":
        return <Badge variant="warning">{priority}</Badge>
      case "Medium":
        return <Badge variant="secondary">{priority}</Badge>
      default:
        return <Badge variant="outline">{priority}</Badge>
    }
  }

  return (
    <DashboardShell>
      <div className="flex items-center justify-between px-2">
        <div className="grid gap-1">
          <h1 className="font-heading text-3xl md:text-4xl">Maintenance & Workflows</h1>
          <p className="text-lg text-muted-foreground">
            Manage equipment maintenance schedules and standard operating procedures.
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Task
        </Button>
      </div>
      
      <Tabs defaultValue="maintenance" className="mt-6">
        <TabsList>
          <TabsTrigger value="maintenance">Maintenance Schedule</TabsTrigger>
          <TabsTrigger value="workflows">Workflows</TabsTrigger>
        </TabsList>
        
        <TabsContent value="maintenance" className="mt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Equipment</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Assigned To</TableHead>
                <TableHead>Priority</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {maintenanceTasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell className="font-medium">{task.equipment}</TableCell>
                  <TableCell>{task.type}</TableCell>
                  <TableCell>{getStatusBadge(task.status)}</TableCell>
                  <TableCell>{task.dueDate}</TableCell>
                  <TableCell>{task.assignedTo}</TableCell>
                  <TableCell>{getPriorityBadge(task.priority)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        
        <TabsContent value="workflows" className="mt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Workflow Name</TableHead>
                <TableHead>Steps</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {workflows.map((workflow) => (
                <TableRow key={workflow.id}>
                  <TableCell className="font-medium">{workflow.name}</TableCell>
                  <TableCell>{workflow.steps}</TableCell>
                  <TableCell>{workflow.category}</TableCell>
                  <TableCell>{workflow.lastUpdated}</TableCell>
                  <TableCell>{getStatusBadge(workflow.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

