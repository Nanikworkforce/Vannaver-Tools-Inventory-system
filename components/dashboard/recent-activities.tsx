"use client"

import { useState } from "react"
import { Activity } from "lucide-react"
import GalleryTab from "@/components/dashboard/gallery-tab"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentActivities() {
  const [activeTab, setActiveTab] = useState<'activities' | 'gallery'>('activities')

  const activities = [
    {
      id: 1,
      user: {
        name: "Michael Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "MJ",
      },
      action: "updated maintenance record for",
      item: "Rod Pump #RP-1234",
      time: "2 hours ago",
    },
    {
      id: 2,
      user: {
        name: "Sarah Williams",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "SW",
      },
      action: "moved",
      item: "Himars #H-5678",
      time: "5 hours ago",
    },
    {
      id: 3,
      user: {
        name: "David Brown",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "DB",
      },
      action: "added new project",
      item: "Gulf of Mexico Drilling",
      time: "Yesterday",
    },
    {
      id: 4,
      user: {
        name: "Lisa Chen",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "LC",
      },
      action: "updated customer record for",
      item: "Petromax Inc.",
      time: "Yesterday",
    },
    {
      id: 5,
      user: {
        name: "Robert Wilson",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "RW",
      },
      action: "scheduled maintenance for",
      item: "Thin Man #TM-9012",
      time: "2 days ago",
    },
  ]

  return (
    <div className="border rounded-lg">
      <div className="border-b">
        <div className="flex">
          <button
            onClick={() => setActiveTab('activities')}
            className={`px-4 py-2 ${
              activeTab === 'activities'
                ? 'border-b-2 border-black'
                : 'text-gray-600'
            }`}
          >
            <Activity className="w-4 h-4 mr-2 inline-block" />
            Activities
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-4 py-2 ${
              activeTab === 'gallery'
                ? 'border-b-2 border-black'
                : 'text-gray-600'
            }`}
          >
            Gallery
          </button>
        </div>
      </div>
      <div>
        {activeTab === 'activities' ? (
          <div className="p-4">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activities.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-4">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={activity.user.avatar} />
                        <AvatarFallback>{activity.user.initials}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <p className="text-sm">
                          <span className="font-medium">{activity.user.name}</span> {activity.action}{" "}
                          <span className="font-medium">{activity.item}</span>
                        </p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <GalleryTab />
        )}
      </div>
    </div>
  )
}

