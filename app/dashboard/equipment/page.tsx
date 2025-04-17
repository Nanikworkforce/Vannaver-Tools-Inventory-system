"use client"

import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EquipmentPage() {
  // This would typically come from your database
  const equipment = [
    {
      id: 1,
      image: "/images/ki.png",
      name: "Fatman KI",
      category: "360° Cameras",
      status: "Available",
      condition: "Excellent",
      lastMaintenance: "2024-02-15",
      link: "/dashboard/item-page"
    },
    {
      id: 2,
      image: "/images/rod.png",
      name: "Rod Pump",
      category: "Software Suite",
      status: "In Use",
      condition: "N/A",
      lastMaintenance: "N/A",
    },
    {
      id: 3,
      image: "/images/himar.png",
      name: "Himars",
      category: "Virtual Tour Platform",
      status: "Available",
      condition: "N/A",
      lastMaintenance: "N/A",
    },
    {
      id: 4,
      image: "/images/thin.png",
      name: "Thin Man",
      category: "3D Modeling",
      status: "In Maintenance",
      condition: "Good",
      lastMaintenance: "2024-02-20",
    },
    {
      id: 5,
      image: "/images/little.png",
      name: "Little Boy",
      category: "AR Solutions",
      status: "In Use",
      condition: "Good",
      lastMaintenance: "2024-01-30",
    },
  ]

  return (
    <DashboardShell>
      <div className="flex items-center justify-between px-2">
        <div className="grid gap-1">
          <h1 className="font-heading text-3xl md:text-4xl">Inventory Management</h1>
          <p className="text-lg text-muted-foreground">
            Manage and track all VNVR equipment and resources.
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Equipment
        </Button>
      </div>
      <div className="p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Condition</TableHead>
              <TableHead>Last Maintenance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {equipment.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Image src={item.image} alt={item.name} width={100} height={100} />
                </TableCell>
                <TableCell className="font-medium">
                  {item.link ? (
                    <Link href={item.link} className="text-blue-600 hover:underline">
                      {item.name}
                    </Link>
                  ) : (
                    item.name
                  )}
                </TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.condition}</TableCell>
                <TableCell>{item.lastMaintenance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </DashboardShell>
  )
} 