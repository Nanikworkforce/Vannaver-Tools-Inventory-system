"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FinancialSummary() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Data for the chart
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const acquisitionCosts = [
      120000, 85000, 150000, 95000, 180000, 110000, 75000, 130000, 160000, 90000, 140000, 200000,
    ]
    const maintenanceCosts = [25000, 30000, 22000, 35000, 28000, 40000, 32000, 26000, 38000, 29000, 33000, 42000]
    const operationalCosts = [45000, 42000, 48000, 40000, 52000, 47000, 43000, 50000, 46000, 44000, 49000, 55000]

    // Calculate chart dimensions
    const padding = 40
    const chartWidth = canvas.width - padding * 2
    const chartHeight = canvas.height - padding * 2
    const barWidth = chartWidth / months.length / 3 - 4

    // Find max value for scaling
    const maxValue = Math.max(...acquisitionCosts, ...maintenanceCosts, ...operationalCosts)

    // Draw axes
    ctx.beginPath()
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, canvas.height - padding)
    ctx.lineTo(canvas.width - padding, canvas.height - padding)
    ctx.strokeStyle = "#d1d5db"
    ctx.stroke()

    // Draw y-axis labels
    ctx.textAlign = "right"
    ctx.textBaseline = "middle"
    ctx.fillStyle = "#6b7280"
    ctx.font = "12px sans-serif"

    const yAxisSteps = 5
    for (let i = 0; i <= yAxisSteps; i++) {
      const y = canvas.height - padding - (i * chartHeight) / yAxisSteps
      const value = Math.round((maxValue * i) / yAxisSteps)
      ctx.fillText(`$${(value / 1000).toFixed(0)}k`, padding - 10, y)

      // Draw horizontal grid line
      ctx.beginPath()
      ctx.moveTo(padding, y)
      ctx.lineTo(canvas.width - padding, y)
      ctx.strokeStyle = "#e5e7eb"
      ctx.stroke()
    }

    // Draw bars and x-axis labels
    months.forEach((month, i) => {
      const x = padding + i * (chartWidth / months.length) + chartWidth / months.length / 2 - barWidth * 1.5

      // Draw x-axis label
      ctx.textAlign = "center"
      ctx.textBaseline = "top"
      ctx.fillStyle = "#6b7280"
      ctx.fillText(month, x + barWidth * 1.5, canvas.height - padding + 10)

      // Draw acquisition cost bar
      const acquisitionHeight = (acquisitionCosts[i] / maxValue) * chartHeight
      ctx.fillStyle = "#3b82f6"
      ctx.fillRect(x, canvas.height - padding - acquisitionHeight, barWidth, acquisitionHeight)

      // Draw maintenance cost bar
      const maintenanceHeight = (maintenanceCosts[i] / maxValue) * chartHeight
      ctx.fillStyle = "#f59e0b"
      ctx.fillRect(x + barWidth + 2, canvas.height - padding - maintenanceHeight, barWidth, maintenanceHeight)

      // Draw operational cost bar
      const operationalHeight = (operationalCosts[i] / maxValue) * chartHeight
      ctx.fillStyle = "#10b981"
      ctx.fillRect(x + barWidth * 2 + 4, canvas.height - padding - operationalHeight, barWidth, operationalHeight)
    })

    // Draw legend
    const legendItems = [
      { label: "Acquisition", color: "#3b82f6" },
      { label: "Maintenance", color: "#f59e0b" },
      { label: "Operational", color: "#10b981" },
    ]

    const legendX = canvas.width - padding - 150
    const legendY = padding + 20

    legendItems.forEach((item, i) => {
      const y = legendY + i * 25

      // Draw color box
      ctx.fillStyle = item.color
      ctx.fillRect(legendX, y, 15, 15)

      // Draw label
      ctx.fillStyle = "#000000"
      ctx.textAlign = "left"
      ctx.textBaseline = "middle"
      ctx.fillText(item.label, legendX + 25, y + 7.5)
    })
  }, [])

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Financial Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <canvas ref={canvasRef} className="w-full h-full"></canvas>
        </div>
      </CardContent>
    </Card>
  )
}

