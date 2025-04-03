import { JobRequestForm } from "@/components/job-request/job-request-form"
import { PdfUploader } from "@/components/job-request/pdf-uploader"

export default function JobRequestPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Job Request Form</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

