import { ProfileForm } from "@/components/profile/profile-form"
import Image from "next/image"

export default function ProfilePage() {
  return (
    <div className="flex flex-col p-3 sm:p-4 md:p-6 space-y-4 md:space-y-6">
      <div className="flex items-center justify-between mb-2 md:mb-6">
        <h1 className="text-xl sm:text-2xl font-bold">User Profile</h1>
        <div className="hidden md:block">
          <div className="relative h-10 sm:h-12 md:h-14 w-36 sm:w-40 md:w-48">
            <Image src="/images/vannevar-logo.png" alt="Vannevar Logo" fill className="object-contain" />
          </div>
        </div>
      </div>

      <ProfileForm />
    </div>
  )
}

