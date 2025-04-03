import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function EquipmentList() {
  const equipment = [
    {
      id: "DB-1234",
      name: "Drill Bit",
      location: "Gulf of Mexico",
      status: "Operational",
      lastUpdated: "2 hours ago",
    },
    {
      id: "P-5678",
      name: "Pump",
      location: "North Sea",
      status: "In Maintenance",
      lastUpdated: "1 day ago",
    },
    {
      id: "G-9012",
      name: "Generator",
      location: "Permian Basin",
      status: "Operational",
      lastUpdated: "5 hours ago",
    },
    {
      id: "C-3456",
      name: "Compressor",
      location: "Alaska",
      status: "In Transit",
      lastUpdated: "3 hours ago",
    },
    {
      id: "M-7890",
      name: "Motor",
      location: "Gulf of Mexico",
      status: "Operational",
      lastUpdated: "1 hour ago",
    },
  ]

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Equipment List</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {equipment.map((item) => (
            <div key={item.id} className="flex flex-col space-y-2 rounded-md border p-3">
              <div className="flex items-center justify-between">
                <span className="font-medium">
                  {item.name} ({item.id})
                </span>
                <Badge
                  variant={
                    item.status === "Operational"
                      ? "default"
                      : item.status === "In Maintenance"
                        ? "destructive"
                        : "outline"
                  }
                >
                  {item.status}
                </Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{item.location}</span>
                <span className="text-muted-foreground">Updated: {item.lastUpdated}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

