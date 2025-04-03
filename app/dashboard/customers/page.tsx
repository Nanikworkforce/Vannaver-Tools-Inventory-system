import { CustomersList } from "@/components/customers/customers-list"
import { CustomerFilters } from "@/components/customers/customer-filters"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

export default function CustomersPage() {
  return (
    <div className="flex flex-col p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Customer Management</h1>
        <Button asChild>
          <Link href="/dashboard/customers/new">
            <Plus className="mr-2 h-4 w-4" /> Add New Customer
          </Link>
        </Button>
      </div>
      <CustomerFilters />
      <CustomersList />
    </div>
  )
}

