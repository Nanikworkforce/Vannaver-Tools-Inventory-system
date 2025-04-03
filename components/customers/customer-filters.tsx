import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter } from "lucide-react"

export function CustomerFilters() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <div className="flex-1">
        <Input placeholder="Search customers..." />
      </div>
      <div className="flex flex-wrap gap-2">
        <Select>
          <SelectTrigger className="min-w-[150px]">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="houston">Houston, TX</SelectItem>
            <SelectItem value="aberdeen">Aberdeen, UK</SelectItem>
            <SelectItem value="dallas">Dallas, TX</SelectItem>
            <SelectItem value="anchorage">Anchorage, AK</SelectItem>
            <SelectItem value="dubai">Dubai, UAE</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="min-w-[150px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="min-w-[150px]">
            <SelectValue placeholder="Projects" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="with-projects">With Projects</SelectItem>
            <SelectItem value="no-projects">No Projects</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

