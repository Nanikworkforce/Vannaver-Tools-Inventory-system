"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function EquipmentStatusChart() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Equipment Status</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center p-6">
        <div className="w-full aspect-square max-w-[400px]">
          {/* Your pie chart component here */}
          <div className="relative w-full h-full">
            {/* Pie chart segments */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 rounded-full" style={{ background: 'conic-gradient(#10b981 65%, #f59e0b 15%, #3b82f6 12%, #ef4444 8%)' }}></div>
            </div>
          </div>
        </div>
      </CardContent>
      <div className="px-6 pb-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="text-sm">Operational (65%)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <span className="text-sm">In Maintenance (15%)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-sm">In Transit (12%)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-sm">Offline (8%)</span>
          </div>
        </div>
      </div>
    </Card>
  )
}

