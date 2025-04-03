"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function LocationMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Draw a simple world map (simplified for demonstration)
    ctx.fillStyle = "#f3f4f6"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw some continents (simplified shapes)
    ctx.fillStyle = "#e5e7eb"

    // North America
    ctx.beginPath()
    ctx.moveTo(canvas.width * 0.1, canvas.height * 0.2)
    ctx.lineTo(canvas.width * 0.3, canvas.height * 0.2)
    ctx.lineTo(canvas.width * 0.25, canvas.height * 0.5)
    ctx.lineTo(canvas.width * 0.15, canvas.height * 0.5)
    ctx.closePath()
    ctx.fill()

    // South America
    ctx.beginPath()
    ctx.moveTo(canvas.width * 0.25, canvas.height * 0.5)
    ctx.lineTo(canvas.width * 0.3, canvas.height * 0.5)
    ctx.lineTo(canvas.width * 0.25, canvas.height * 0.8)
    ctx.lineTo(canvas.width * 0.2, canvas.height * 0.8)
    ctx.closePath()
    ctx.fill()

    // Europe and Africa
    ctx.beginPath()
    ctx.moveTo(canvas.width * 0.4, canvas.height * 0.2)
    ctx.lineTo(canvas.width * 0.5, canvas.height * 0.2)
    ctx.lineTo(canvas.width * 0.55, canvas.height * 0.7)
    ctx.lineTo(canvas.width * 0.4, canvas.height * 0.7)
    ctx.closePath()
    ctx.fill()

    // Asia
    ctx.beginPath()
    ctx.moveTo(canvas.width * 0.5, canvas.height * 0.2)
    ctx.lineTo(canvas.width * 0.8, canvas.height * 0.2)
    ctx.lineTo(canvas.width * 0.7, canvas.height * 0.5)
    ctx.lineTo(canvas.width * 0.5, canvas.height * 0.5)
    ctx.closePath()
    ctx.fill()

    // Australia
    ctx.beginPath()
    ctx.moveTo(canvas.width * 0.7, canvas.height * 0.6)
    ctx.lineTo(canvas.width * 0.8, canvas.height * 0.6)
    ctx.lineTo(canvas.width * 0.8, canvas.height * 0.7)
    ctx.lineTo(canvas.width * 0.7, canvas.height * 0.7)
    ctx.closePath()
    ctx.fill()

    // Draw equipment locations
    const locations = [
      { x: canvas.width * 0.2, y: canvas.height * 0.3, count: 12, name: "Gulf of Mexico" },
      { x: canvas.width * 0.45, y: canvas.height * 0.25, count: 8, name: "North Sea" },
      { x: canvas.width * 0.18, y: canvas.height * 0.15, count: 5, name: "Alaska" },
      { x: canvas.width * 0.6, y: canvas.height * 0.35, count: 15, name: "Middle East" },
      { x: canvas.width * 0.22, y: canvas.height * 0.4, count: 10, name: "Permian Basin" },
    ]

    locations.forEach((location) => {
      // Draw location marker
      ctx.beginPath()
      ctx.arc(location.x, location.y, 8, 0, Math.PI * 2)
      ctx.fillStyle = "#ef4444"
      ctx.fill()

      // Draw count
      ctx.fillStyle = "#ffffff"
      ctx.font = "bold 10px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(location.count.toString(), location.x, location.y)

      // Draw location name
      ctx.fillStyle = "#000000"
      ctx.font = "12px sans-serif"
      ctx.fillText(location.name, location.x, location.y + 20)
    })
  }, [])

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Equipment Location Map</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-[16/9] w-full">
          <canvas ref={canvasRef} className="w-full h-full rounded-md"></canvas>
        </div>
      </CardContent>
    </Card>
  )
}

