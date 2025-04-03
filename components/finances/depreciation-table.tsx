import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function DepreciationTable() {
  const assets = [
    {
      id: "DB-1234",
      name: "Drill Bit",
      purchaseDate: "Jan 10, 2023",
      purchasePrice: "$45,000",
      currentValue: "$32,400",
      depreciationRate: "15%",
      annualDepreciation: "$6,750",
    },
    {
      id: "P-5678",
      name: "Pump",
      purchaseDate: "Feb 22, 2022",
      purchasePrice: "$78,000",
      currentValue: "$46,800",
      depreciationRate: "20%",
      annualDepreciation: "$15,600",
    },
    {
      id: "G-9012",
      name: "Generator",
      purchaseDate: "Mar 5, 2023",
      purchasePrice: "$120,000",
      currentValue: "$96,000",
      depreciationRate: "10%",
      annualDepreciation: "$12,000",
    },
    {
      id: "C-3456",
      name: "Compressor",
      purchaseDate: "Apr 15, 2022",
      purchasePrice: "$65,000",
      currentValue: "$42,250",
      depreciationRate: "15%",
      annualDepreciation: "$9,750",
    },
    {
      id: "M-7890",
      name: "Motor",
      purchaseDate: "May 8, 2023",
      purchasePrice: "$35,000",
      currentValue: "$29,750",
      depreciationRate: "10%",
      annualDepreciation: "$3,500",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Asset Depreciation</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Asset</TableHead>
              <TableHead>Purchase Date</TableHead>
              <TableHead>Purchase Price</TableHead>
              <TableHead>Current Value</TableHead>
              <TableHead>Annual Depreciation</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {assets.map((asset) => (
              <TableRow key={asset.id}>
                <TableCell className="font-medium">
                  {asset.name} ({asset.id})
                </TableCell>
                <TableCell>{asset.purchaseDate}</TableCell>
                <TableCell>{asset.purchasePrice}</TableCell>
                <TableCell>{asset.currentValue}</TableCell>
                <TableCell>{asset.annualDepreciation}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

