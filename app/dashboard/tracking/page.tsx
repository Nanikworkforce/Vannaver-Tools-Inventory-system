import { LocationMap } from "@/components/tracking/location-map"
import { EquipmentList } from "@/components/tracking/equipment-list"
import { LocationFilters } from "@/components/tracking/location-filters"

export default function TrackingPage() {
  return (
    <div className="flex flex-col p-6 space-y-6">
      <h1 className="text-2xl font-bold">Equipment Tracking</h1>
      <LocationFilters />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <LocationMap />
        </div>
        <div>
          <EquipmentList />
        </div>
      </div>
    </div>
  )
}

