import { AssetsList } from "@/components/assets/assets-list"
import { AssetFilters } from "@/components/assets/asset-filters"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AssetsPage() {
  return (
    <div className="flex flex-col p-3 sm:p-4 md:p-6 space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-xl sm:text-2xl font-bold">Asset Management</h1>
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <div className="relative h-10 sm:h-12 md:h-14 w-36 sm:w-40 md:w-48">
              <Image src="/images/vannevar-logo.png" alt="Vannevar Logo" fill className="object-contain" />
            </div>
          </div>
          <Button asChild>
            <Link href="/dashboard/assets/new">
              <Plus className="mr-2 h-4 w-4" /> Add New Asset
            </Link>
          </Button>
        </div>
      </div>
      <AssetFilters />
      <AssetsList />
    </div>
  )
}

