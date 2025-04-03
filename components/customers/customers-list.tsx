"use client"

import { useState } from "react"
import { Building2, MapPin, MoreHorizontal, Phone, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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

export function CustomersList() {
  const { toast } = useToast()
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Petromax Inc.",
      contactPerson: "John Smith",
      phone: "+1 (555) 123-4567",
      location: "Houston, TX",
      status: "Active",
      projects: 3,
    },
    {
      id: 2,
      name: "OceanRig Ltd.",
      contactPerson: "Emma Johnson",
      phone: "+44 (20) 7946-0123",
      location: "Aberdeen, UK",
      status: "Active",
      projects: 1,
    },
    {
      id: 3,
      name: "Texas Energy Co.",
      contactPerson: "Michael Brown",
      phone: "+1 (555) 987-6543",
      location: "Dallas, TX",
      status: "Active",
      projects: 2,
    },
    {
      id: 4,
      name: "Northern Oil Corp.",
      contactPerson: "Sarah Williams",
      phone: "+1 (555) 456-7890",
      location: "Anchorage, AK",
      status: "Inactive",
      projects: 0,
    },
    {
      id: 5,
      name: "Global Petroleum",
      contactPerson: "Ahmed Al-Farsi",
      phone: "+971 (4) 123-4567",
      location: "Dubai, UAE",
      status: "Active",
      projects: 1,
    },
  ])

  const deactivateCustomer = (id: number) => {
    setCustomers(customers.map((customer) => (customer.id === id ? { ...customer, status: "Inactive" } : customer)))
    toast({
      title: "Customer Deactivated",
      description: `${customers.find((customer) => customer.id === id)?.name} has been deactivated.`,
    })
  }

  const activateCustomer = (id: number) => {
    setCustomers(customers.map((customer) => (customer.id === id ? { ...customer, status: "Active" } : customer)))
    toast({
      title: "Customer Activated",
      description: `${customers.find((customer) => customer.id === id)?.name} has been activated.`,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Database</CardTitle>
        <CardDescription>Manage your customer relationships and contacts</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Company</TableHead>
              <TableHead>Contact Person</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Projects</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                    <span>{customer.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span>{customer.contactPerson}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{customer.phone}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{customer.location}</span>
                  </div>
                </TableCell>
                <TableCell>{customer.projects}</TableCell>
                <TableCell>
                  <Badge variant={customer.status === "Active" ? "default" : "outline"}>{customer.status}</Badge>
                </TableCell>
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
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit Customer</DropdownMenuItem>
                      <DropdownMenuItem>View Projects</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      {customer.status === "Active" ? (
                        <DropdownMenuItem onClick={() => deactivateCustomer(customer.id)}>
                          Deactivate Customer
                        </DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem onClick={() => activateCustomer(customer.id)}>
                          Activate Customer
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

