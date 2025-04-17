import { Skeleton } from "@/components/ui/skeleton"
import { Card } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-[200px]" />
      </div>

      <Card className="overflow-hidden">
        <div className="grid grid-cols-[250px_1fr_120px_120px_100px_120px]">
          {Array(6).fill(null).map((_, i) => (
            <Skeleton key={i} className="h-12 m-2" />
          ))}
        </div>
        
        <div className="border-t">
          {Array(3).fill(null).map((_, i) => (
            <div key={i} className="grid grid-cols-[250px_1fr_120px_120px_100px_120px]">
              {Array(6).fill(null).map((_, j) => (
                <Skeleton key={j} className="h-20 m-2" />
              ))}
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
} 