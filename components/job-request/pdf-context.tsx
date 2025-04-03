"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type PdfData = {
  operator?: string
  wellName?: string
  location?: string
  systemType?: string
  grade?: string
  odSize?: string
  contactName?: string
  contactEmail?: string
  contactPhone?: string
  jobDescription?: string
}

type PdfContextType = {
  pdfData: PdfData | null
  setPdfData: (data: PdfData) => void
}

const PdfContext = createContext<PdfContextType | undefined>(undefined)

export function PdfProvider({ children }: { children: ReactNode }) {
  const [pdfData, setPdfData] = useState<PdfData | null>(null)

  return <PdfContext.Provider value={{ pdfData, setPdfData }}>{children}</PdfContext.Provider>
}

export function usePdfContext() {
  const context = useContext(PdfContext)
  if (context === undefined) {
    throw new Error("usePdfContext must be used within a PdfProvider")
  }
  return context
}

