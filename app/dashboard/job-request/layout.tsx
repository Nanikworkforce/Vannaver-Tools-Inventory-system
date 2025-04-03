import type React from "react"
import { PdfProvider } from "@/components/job-request/pdf-context"

export default function JobRequestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <PdfProvider>{children}</PdfProvider>
}

