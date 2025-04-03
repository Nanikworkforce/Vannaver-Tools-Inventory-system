import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter } from "lucide-react"
import { DatePickerWithRange } from "@/components/ui/date-range-picker"

export function ProjectFilters() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <div className="flex-1">
        <Input placeholder="Search projects..." />
      </div>
      <div className="flex flex-wrap gap-2">
        <DatePickerWithRange className="min-w-[300px]" />
        <Select>
          <SelectTrigger className="min-w-[150px]">
            <SelectValue placeholder="Customer" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="petromax">Petromax Inc.</SelectItem>
            <SelectItem value="oceanrig">OceanRig Ltd.</SelectItem>
            <SelectItem value="texas-energy">Texas Energy Co.</SelectItem>
            <SelectItem value="northern-oil">Northern Oil Corp.</SelectItem>
            <SelectItem value="global-petroleum">Global Petroleum</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="min-w-[150px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="upcoming">Upcoming</SelectItem>
            <SelectItem value="planning">Planning</SelectItem>
            <SelectItem value="negotiation">Negotiation</SelectItem>
            <SelectItem value="approved">Approved</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

