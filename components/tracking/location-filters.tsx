import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter, RefreshCw } from "lucide-react"

export function LocationFilters() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <div className="flex-1">
        <Input placeholder="Search equipment..." />
      </div>
      <div className="flex flex-wrap gap-2">
        <Select>
          <SelectTrigger className="min-w-[150px]">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="gulf-of-mexico">Gulf of Mexico</SelectItem>
            <SelectItem value="north-sea">North Sea</SelectItem>
            <SelectItem value="permian-basin">Permian Basin</SelectItem>
            <SelectItem value="alaska">Alaska</SelectItem>
            <SelectItem value="middle-east">Middle East</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="min-w-[150px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="operational">Operational</SelectItem>
            <SelectItem value="maintenance">In Maintenance</SelectItem>
            <SelectItem value="transit">In Transit</SelectItem>
            <SelectItem value="offline">Offline</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

