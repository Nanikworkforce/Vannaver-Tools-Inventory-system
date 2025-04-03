import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, BarChart, Clock, PenToolIcon as Tool } from "lucide-react"

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col space-y-2">
            <span className="text-muted-foreground text-sm">Total Assets</span>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold">1,248</span>
              <span className="text-sm text-green-600">+12 from last month</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col space-y-2">
            <span className="text-muted-foreground text-sm">Active Projects</span>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold">24</span>
              <span className="text-sm text-green-600">+2 from last month</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col space-y-2">
            <span className="text-muted-foreground text-sm">Maintenance Due</span>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold">18</span>
              <span className="text-sm text-amber-600">+5 from last week</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col space-y-2">
            <span className="text-muted-foreground text-sm">Alerts</span>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold">7</span>
              <span className="text-sm text-red-600">-2 from yesterday</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

