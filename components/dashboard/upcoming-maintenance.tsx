import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Wrench, AlertCircle } from "lucide-react"

export function UpcomingMaintenance() {
  const maintenanceItems = [
    {
      id: 1,
      equipment: "FatMan KI",
      type: "Preventative",
      date: "Apr 15, 2025",
      status: "Scheduled"
    },
    {
      id: 2,
      equipment: "FAT MAN",
      type: "Repair",
      date: "Apr 18, 2025",
      status: "Pending"
    },
    {
      id: 3,
      equipment: "FAT MAN 239",
      type: "Inspection",
      date: "Apr 20, 2025",
      status: "Scheduled"
    },
    {
      id: 4,
      equipment: "HIMARS",
      type: "Preventative",
      date: "Apr 22, 2025",
      status: "Pending"
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Scheduled":
        return <Badge className="bg-black text-white hover:bg-black/90">{status}</Badge>
      case "Pending":
        return <Badge variant="outline">{status}</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Repair":
        return <Wrench className="h-4 w-4 text-muted-foreground" />
      case "Inspection":
        return <AlertCircle className="h-4 w-4 text-muted-foreground" />
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />
    }
  }

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle>Upcoming Maintenance</CardTitle>
        <Button variant="link" className="font-medium">View All</Button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {maintenanceItems.map((item) => (
            <div key={item.id} className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="font-medium">{item.equipment}</h3>
                  <div className="flex items-center gap-2">
                    {getTypeIcon(item.type)}
                    <p className="text-sm text-muted-foreground">{item.type}</p>
                  </div>
                </div>
                {getStatusBadge(item.status)}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

