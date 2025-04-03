"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { FileUp, File, CheckCircle2, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { usePdfContext } from "@/components/job-request/pdf-context"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function PdfUploader() {
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const { setPdfData } = usePdfContext()
  const intervalRef = useRef<ReturnType<typeof setInterval>>()

  // Cleanup function for intervals
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      if (selectedFile.type !== "application/pdf") {
        setError("Please upload a PDF file")
        setFile(null)
        return
      }
      if (selectedFile.size > 10 * 1024 * 1024) { // 10MB limit
        setError("File size must be less than 10MB")
        setFile(null)
        return
      }
      setFile(selectedFile)
      setError(null)
    }
  }

  const handleUpload = async () => {
    if (!file) return

    setIsUploading(true)
    setUploadProgress(0)
    setError(null)

    // Simulate upload progress
    intervalRef.current = setInterval(() => {
      setUploadProgress((prev: number) => {
        if (prev >= 100) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current)
          }
          return 100
        }
        return prev + 10
      })
    }, 200)

    try {
      // Simulate PDF parsing
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // In a real application, you would use a PDF parsing library
      // For this demo, we'll simulate extracting data from the PDF
      const mockExtractedData = {
        operator: "Vannevar",
        wellName: "Eagle Ford #1",
        location: "Texas - Permian Basin",
        systemType: "Production Tubing",
        grade: "API 5CT L80",
        odSize: "3 1/2",
        contactName: "John Smith",
        contactEmail: "john.smith@example.com",
        contactPhone: "(555) 123-4567",
        jobDescription: "Need to replace production tubing due to corrosion issues. Urgent request.",
      }

      setPdfData(mockExtractedData)
      
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      setUploadProgress(100)

      // Simulate processing delay
      await new Promise((resolve) => setTimeout(resolve, 500))
      setIsUploading(false)
    } catch (err) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      setError("Failed to process PDF. Please try again.")
      setIsUploading(false)
      setUploadProgress(0)
      console.error("PDF processing error:", err)
    }
  }

  const resetUpload = () => {
    setFile(null)
    setUploadProgress(0)
    setError(null)
  }

  return (
    <Card className="border-0 shadow-lg bg-white/75 dark:bg-gray-900/75 backdrop-blur-sm">
      <CardHeader className="p-4 md:p-6">
        <CardTitle className="text-lg md:text-xl">Upload Job Request PDF</CardTitle>
        <CardDescription>Upload a PDF file to automatically fill the job request form</CardDescription>
      </CardHeader>
      <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {!file ? (
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 md:p-12">
            <FileUp className="h-10 w-10 md:h-12 md:w-12 text-muted-foreground mb-4" />
            <p className="text-sm text-muted-foreground text-center mb-4">
              Drag and drop your PDF file here, or click to browse
            </p>
            <Button variant="outline" onClick={() => document.getElementById("pdf-upload")?.click()}>
              Select PDF File
            </Button>
            <input
              id="pdf-upload"
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center p-3 md:p-4 border rounded-lg">
              <File className="h-6 w-6 md:h-8 md:w-8 text-muted-foreground mr-3 md:mr-4 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate text-sm md:text-base">{file.name}</p>
                <p className="text-xs md:text-sm text-muted-foreground">{(file.size / 1024).toFixed(2)} KB</p>
              </div>
              {uploadProgress === 100 && !isUploading && (
                <CheckCircle2 className="h-5 w-5 text-green-500 ml-2 flex-shrink-0" />
              )}
            </div>

            {isUploading && (
              <div className="space-y-2">
                <Progress value={uploadProgress} className="h-2" />
                <p className="text-xs md:text-sm text-muted-foreground text-right">{uploadProgress}% processed</p>
              </div>
            )}

            <div className="flex justify-between">
              <Button variant="outline" onClick={resetUpload} size="sm" className="md:size-default">
                Reset
              </Button>
              <Button
                onClick={handleUpload}
                disabled={isUploading || uploadProgress === 100}
                size="sm"
                className="md:size-default"
              >
                {uploadProgress === 100 ? "Processed" : "Process PDF"}
              </Button>
            </div>
          </div>
        )}

        <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t">
          <h3 className="font-medium mb-2 text-sm md:text-base">How it works:</h3>
          <ol className="text-xs md:text-sm text-muted-foreground space-y-1 md:space-y-2 list-decimal list-inside">
            <li>Upload your job request PDF document</li>
            <li>Our system will automatically extract the information</li>
            <li>The form will be pre-filled with the extracted data</li>
            <li>Review the information and make any necessary adjustments</li>
            <li>Submit your job request</li>
          </ol>
        </div>
      </CardContent>
    </Card>
  )
}

