import { FinancialSummary } from "@/components/finances/financial-summary"
import { DepreciationTable } from "@/components/finances/depreciation-table"
import { ExpenseTracking } from "@/components/finances/expense-tracking"
import { FinancialFilters } from "@/components/finances/financial-filters"

export default function FinancesPage() {
  return (
    <div className="flex flex-col p-6 space-y-6">
      <h1 className="text-2xl font-bold">Financial Tracking</h1>
      <FinancialFilters />
      <FinancialSummary />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DepreciationTable />
        <ExpenseTracking />
      </div>
    </div>
  )
}

