"use client"

import { useState } from "react"
import Link from "next/link"
import { MoreHorizontal, Pencil, QrCode, Trash2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/hooks/use-toast"

export function AssetsList() {
  const { toast } = useToast()
  const [assets, setAssets] = useState([
    {
      id: "DB-1234",
      name: "Drill Bit",
      type: "Drilling Equipment",
      location: "Gulf of Mexico",
      status: "Operational",
      lastMaintenance: "Mar 15, 2025",
      purchaseDate: "Jan 10, 2023",
      hoursUsed: 1250,
    },
    {
      id: "P-5678",
      name: "Pump",
      type: "Fluid Management",
      location: "North Sea",
      status: "In Maintenance",
      lastMaintenance: "Apr 1, 2025",
      purchaseDate: "Feb 22, 2022",
      hoursUsed: 3420,
    },
    {
      id: "G-9012",
      name: "Generator",
      type: "Power Equipment",
      location: "Permian Basin",
      status: "Operational",
      lastMaintenance: "Feb 28, 2025",
      purchaseDate: "Mar 5, 2023",
      hoursUsed: 2150,
    },
    {
      id: "C-3456",
      name: "Compressor",
      type: "Pressure Equipment",
      location: "Alaska",
      status: "In Transit",
      lastMaintenance: "Mar 10, 2025",
      purchaseDate: "Apr 15, 2022",
      hoursUsed: 1870,
    },
    {
      id: "M-7890",
      name: "Motor",
      type: "Power Equipment",
      location: "Gulf of Mexico",
      status: "Operational",
      lastMaintenance: "Mar 20, 2025",
      purchaseDate: "May 8, 2023",
      hoursUsed: 980,
    },
  ])

  const handleDelete = (id: string) => {
    setAssets(assets.filter((asset) => asset.id !== id))
    toast({
      title: "Asset Deleted",
      description: `Asset ${id} has been deleted.`,
    })
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Maintenance</TableHead>
            <TableHead className="text-right">Hours Used</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assets.map((asset) => (
            <TableRow key={asset.id}>
              <TableCell className="font-medium">{asset.id}</TableCell>
              <TableCell>{asset.name}</TableCell>
              <TableCell>{asset.type}</TableCell>
              <TableCell>{asset.location}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    asset.status === "Operational"
                      ? "default"
                      : asset.status === "In Maintenance"
                        ? "destructive"
                        : "outline"
                  }
                >
                  {asset.status}
                </Badge>
              </TableCell>
              <TableCell>{asset.lastMaintenance}</TableCell>
              <TableCell className="text-right">{asset.hoursUsed}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem asChild>
                      <Link href={`/dashboard/assets/${asset.id}`}>
                        <Pencil className="mr-2 h-4 w-4" />
                        <span>Edit</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <QrCode className="mr-2 h-4 w-4" />
                      <span>View QR Code</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => handleDelete(asset.id)}>
                      <Trash2 className="mr-2 h-4 w-4" />
                      <span>Delete</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

