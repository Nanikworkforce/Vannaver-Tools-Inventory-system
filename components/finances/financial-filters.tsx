import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter } from "lucide-react"
import { DatePickerWithRange } from "@/components/ui/date-range-picker"

export function FinancialFilters() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <div className="flex-1">
        <Input placeholder="Search financial records..." />
      </div>
      <div className="flex flex-wrap gap-2">
        <DatePickerWithRange className="min-w-[300px]" />
        <Select>
          <SelectTrigger className="min-w-[150px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="maintenance">Maintenance</SelectItem>
            <SelectItem value="parts">Parts</SelectItem>
            <SelectItem value="operational">Operational</SelectItem>
            <SelectItem value="inspection">Inspection</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="min-w-[150px]">
            <SelectValue placeholder="Project" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="gulf">Gulf of Mexico Drilling</SelectItem>
            <SelectItem value="north-sea">North Sea Exploration</SelectItem>
            <SelectItem value="permian">Permian Basin Expansion</SelectItem>
            <SelectItem value="alaska">Alaska Pipeline Maintenance</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

