import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ProjectPipeline() {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle>Project Pipeline</CardTitle>
        <Button variant="link" className="font-medium">View All</Button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="font-medium">Permian Basin</h3>
                <p className="text-sm text-muted-foreground">XTO</p>
              </div>
              <Badge>Upcoming</Badge>
            </div>
            <p className="text-sm text-muted-foreground">Equipment needed: 24 units</p>
            <p className="text-sm text-muted-foreground">May 10, 2025</p>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="font-medium">Bakken Formation</h3>
                <p className="text-sm text-muted-foreground">Chevron</p>
              </div>
              <Badge variant="outline">Planning</Badge>
            </div>
            <p className="text-sm text-muted-foreground">Equipment needed: 36 units</p>
            <p className="text-sm text-muted-foreground">Jun 15, 2025</p>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="font-medium">Eagle Ford Shale</h3>
                <p className="text-sm text-muted-foreground">Hess</p>
              </div>
              <Badge variant="outline">Planning</Badge>
            </div>
            <p className="text-sm text-muted-foreground">Equipment needed: 18 units</p>
            <p className="text-sm text-muted-foreground">Jul 5, 2025</p>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="font-medium">Anadarko Basin</h3>
                <p className="text-sm text-muted-foreground">Devon</p>
              </div>
              <Badge>Upcoming</Badge>
            </div>
            <p className="text-sm text-muted-foreground">Equipment needed: 12 units</p>
            <p className="text-sm text-muted-foreground">Aug 12, 2025</p>
          </div>

        
        </div>
      </CardContent>
    </Card>
  )
}

