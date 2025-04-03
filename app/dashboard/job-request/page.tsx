import { JobRequestForm } from "@/components/job-request/job-request-form"
import { PdfUploader } from "@/components/job-request/pdf-uploader"
import Image from "next/image"

export default function JobRequestPage() {
  return (
    <div className="flex flex-col p-3 sm:p-4 md:p-6 space-y-4 md:space-y-6">
      <div className="flex items-center justify-between mb-2 md:mb-6">
        <h1 className="text-xl sm:text-2xl font-bold">Job Request Form</h1>
        <div className="hidden md:block">
          <div className="relative h-10 sm:h-12 md:h-14 w-36 sm:w-40 md:w-48">
            <Image src="/images/vannevar-logo.png" alt="Vannevar Logo" fill className="object-contain" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        <div className="lg:col-span-1">
          <PdfUploader />
        </div>
        <div className="lg:col-span-2">
          <JobRequestForm />
        </div>
      </div>
    </div>
  )
}

