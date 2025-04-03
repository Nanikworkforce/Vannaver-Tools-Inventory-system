"use client"

import { useState } from "react"
import { Calendar, Clock, MoreHorizontal, PenToolIcon as Tool } from "lucide-react"
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
import { useToast } from "@/hooks/use-toast"

export function MaintenanceSchedule() {
  const { toast } = useToast()
  const [maintenanceItems, setMaintenanceItems] = useState([
    {
      id: 1,
      equipment: "Drill Bit #DB-1234",
      type: "Preventative",
      date: "Apr 15, 2025",
      assignedTo: "Michael Johnson",
      status: "Scheduled",
      estimatedHours: 4,
    },
    {
      id: 2,
      equipment: "Pump #P-5678",
      type: "Repair",
      date: "Apr 18, 2025",
      assignedTo: "Sarah Williams",
      status: "Pending",
      estimatedHours: 6,
    },
    {
      id: 3,
      equipment: "Generator #G-9012",
      type: "Inspection",
      date: "Apr 20, 2025",
      assignedTo: "David Brown",
      status: "Scheduled",
      estimatedHours: 2,
    },
    {
      id: 4,
      equipment: "Compressor #C-3456",
      type: "Preventative",
      date: "Apr 22, 2025",
      assignedTo: "Lisa Chen",
      status: "Pending",
      estimatedHours: 3,
    },
    {
      id: 5,
      equipment: "Motor #M-7890",
      type: "Repair",
      date: "Apr 25, 2025",
      assignedTo: "Robert Wilson",
      status: "Scheduled",
      estimatedHours: 5,
    },
  ])

  const completeTask = (id: number) => {
    setMaintenanceItems(maintenanceItems.map((item) => (item.id === id ? { ...item, status: "Completed" } : item)))
    toast({
      title: "Maintenance Completed",
      description: `Maintenance task for ${maintenanceItems.find((item) => item.id === id)?.equipment} has been marked as completed.`,
    })
  }

  const cancelTask = (id: number) => {
    setMaintenanceItems(maintenanceItems.map((item) => (item.id === id ? { ...item, status: "Cancelled" } : item)))
    toast({
      title: "Maintenance Cancelled",
      description: `Maintenance task for ${maintenanceItems.find((item) => item.id === id)?.equipment} has been cancelled.`,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Maintenance Schedule</CardTitle>
        <CardDescription>View and manage upcoming maintenance tasks</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Equipment</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Assigned To</TableHead>
              <TableHead>Est. Hours</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {maintenanceItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.equipment}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Tool className="h-4 w-4 text-muted-foreground" />
                    <span>{item.type}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{item.date}</span>
                  </div>
                </TableCell>
                <TableCell>{item.assignedTo}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{item.estimatedHours} hours</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      item.status === "Completed"
                        ? "default"
                        : item.status === "Scheduled"
                          ? "outline"
                          : item.status === "Cancelled"
                            ? "destructive"
                            : "secondary"
                    }
                  >
                    {item.status}
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
                      <DropdownMenuItem onClick={() => completeTask(item.id)}>Mark as Completed</DropdownMenuItem>
                      <DropdownMenuItem>Reschedule</DropdownMenuItem>
                      <DropdownMenuItem>Reassign</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => cancelTask(item.id)}>Cancel Maintenance</DropdownMenuItem>
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

