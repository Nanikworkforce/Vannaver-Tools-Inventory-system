"use client"

import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Timer, Calendar, Wrench, MapPin, AlertCircle, CheckCircle2, History } from "lucide-react"

export default function ToolMonitoringPage() {
  // Sample data - would come from your database
  const equipmentData = [
    {
      id: 1,
      name: "360° Camera Pro X1",
      totalHours: 2500,
      maintenanceThreshold: 3000,
      lastMaintenance: "2024-02-15",
      status: "Operational",
      location: "Permian Basin",
      coordinates: { lat: 31.7555, lng: -102.0205 },
    },
    {
      id: 2,
      name: "3D Scanner Elite",
      totalHours: 1800,
      maintenanceThreshold: 2000,
      lastMaintenance: "2024-02-01",
      status: "Maintenance Due",
      location: "Eagle Ford Shale",
      coordinates: { lat: 28.7041, lng: -98.4936 },
    },
    {
      id: 3,
      name: "AR Development Kit",
      totalHours: 900,
      maintenanceThreshold: 2000,
      lastMaintenance: "2024-01-30",
      status: "Operational",
      location: "Bakken Formation",
      coordinates: { lat: 48.1469, lng: -103.6234 },
    },
  ]

  const repairLogs = [
    {
      id: 1,
      equipment: "360° Camera Pro X1",
      date: "2024-02-15",
      type: "Preventive",
      description: "Regular calibration and sensor cleaning",
      cost: 450,
      technician: "John Smith",
    },
    {
      id: 2,
      equipment: "3D Scanner Elite",
      date: "2024-02-01",
      type: "Repair",
      description: "Replaced faulty scanning module",
      cost: 1200,
      technician: "Sarah Johnson",
    },
    {
      id: 3,
      equipment: "AR Development Kit",
      date: "2024-01-30",
      type: "Inspection",
      description: "Quarterly performance check",
      cost: 300,
      technician: "Mike Brown",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Operational":
        return <Badge variant="success"><CheckCircle2 className="mr-1 h-3 w-3" />{status}</Badge>
      case "Maintenance Due":
        return <Badge variant="warning"><AlertCircle className="mr-1 h-3 w-3" />{status}</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getMaintenanceProgress = (current: number, threshold: number) => {
    const percentage = (current / threshold) * 100
    let color = "bg-green-500"
    if (percentage > 90) {
      color = "bg-red-500"
    } else if (percentage > 75) {
      color = "bg-yellow-500"
    }
    return (
      <div className="flex flex-col gap-2">
        <Progress value={percentage} className={color} />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{current} hours</span>
          <span>{threshold} hours</span>
        </div>
      </div>
    )
  }

  return (
    <DashboardShell>
      <div className="flex items-center justify-between px-2">
        <div className="grid gap-1">
          <h1 className="font-heading text-3xl md:text-4xl">Tool Usage & Maintenance Monitoring</h1>
          <p className="text-lg text-muted-foreground">
            Track equipment usage, maintenance schedules, and repair history
          </p>
        </div>
      </div>

      <Tabs defaultValue="usage" className="mt-6">
        <TabsList>
          <TabsTrigger value="usage">
            <Timer className="mr-2 h-4 w-4" />
            Usage Tracking
          </TabsTrigger>
          <TabsTrigger value="maintenance">
            <Calendar className="mr-2 h-4 w-4" />
            Maintenance Schedule
          </TabsTrigger>
          <TabsTrigger value="repairs">
            <Wrench className="mr-2 h-4 w-4" />
            Repair Logs
          </TabsTrigger>
          <TabsTrigger value="map">
            <MapPin className="mr-2 h-4 w-4" />
            Location Map
          </TabsTrigger>
        </TabsList>

        {/* Usage Tracking Tab */}
        <TabsContent value="usage" className="space-y-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Equipment</TableHead>
                <TableHead>Usage Hours</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Last Maintenance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {equipmentData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell className="w-[300px]">
                    {getMaintenanceProgress(item.totalHours, item.maintenanceThreshold)}
                  </TableCell>
                  <TableCell>{getStatusBadge(item.status)}</TableCell>
                  <TableCell>{item.location}</TableCell>
                  <TableCell>{item.lastMaintenance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>

        {/* Maintenance Schedule Tab */}
        <TabsContent value="maintenance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Maintenance</CardTitle>
              <CardDescription>Based on usage thresholds and schedules</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Equipment</TableHead>
                    <TableHead>Hours Until Maintenance</TableHead>
                    <TableHead>Estimated Date</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {equipmentData.map((item) => {
                    const hoursRemaining = item.maintenanceThreshold - item.totalHours
                    return (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell>{hoursRemaining} hours</TableCell>
                        <TableCell>
                          {hoursRemaining < 200 ? (
                            <Badge variant="destructive">Urgent</Badge>
                          ) : (
                            "2024-03-15"
                          )}
                        </TableCell>
                        <TableCell>Preventive</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">Schedule</Button>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Repair Logs Tab */}
        <TabsContent value="repairs" className="space-y-4">
          <div className="flex justify-end">
            <Button>
              <History className="mr-2 h-4 w-4" />
              Add Repair Log
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Equipment</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Cost</TableHead>
                <TableHead>Technician</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {repairLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="font-medium">{log.equipment}</TableCell>
                  <TableCell>{log.date}</TableCell>
                  <TableCell>{log.type}</TableCell>
                  <TableCell>{log.description}</TableCell>
                  <TableCell>${log.cost}</TableCell>
                  <TableCell>{log.technician}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>

        {/* Map Tab */}
        <TabsContent value="map" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <div className="h-[600px] w-full rounded-lg bg-gray-100 dark:bg-gray-800">
                {/* Map component will be integrated here */}
                <div className="flex h-full items-center justify-center">
                  <p className="text-muted-foreground">Map integration coming soon...</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
} 