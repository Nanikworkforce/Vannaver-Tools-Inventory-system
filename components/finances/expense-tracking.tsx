import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function ExpenseTracking() {
  const expenses = [
    {
      id: 1,
      date: "Apr 2, 2025",
      description: "Drill Bit Repair",
      amount: "$2,450",
      category: "Maintenance",
      project: "Gulf of Mexico Drilling",
    },
    {
      id: 2,
      date: "Apr 5, 2025",
      description: "Pump Replacement Parts",
      amount: "$5,800",
      category: "Parts",
      project: "North Sea Exploration",
    },
    {
      id: 3,
      date: "Apr 8, 2025",
      description: "Generator Fuel",
      amount: "$3,200",
      category: "Operational",
      project: "Permian Basin Expansion",
    },
    {
      id: 4,
      date: "Apr 10, 2025",
      description: "Compressor Maintenance",
      amount: "$1,850",
      category: "Maintenance",
      project: "Alaska Pipeline Maintenance",
    },
    {
      id: 5,
      date: "Apr 12, 2025",
      description: "Motor Inspection",
      amount: "$950",
      category: "Inspection",
      project: "Gulf of Mexico Drilling",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Project</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {expenses.map((expense) => (
              <TableRow key={expense.id}>
                <TableCell>{expense.date}</TableCell>
                <TableCell className="font-medium">{expense.description}</TableCell>
                <TableCell>{expense.amount}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      expense.category === "Maintenance"
                        ? "default"
                        : expense.category === "Parts"
                          ? "destructive"
                          : "outline"
                    }
                  >
                    {expense.category}
                  </Badge>
                </TableCell>
                <TableCell>{expense.project}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

