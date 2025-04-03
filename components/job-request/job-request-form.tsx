"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { CalendarIcon, CheckCircle2 } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { usePdfContext } from "@/components/job-request/pdf-context"

// Sample data for dropdowns
const operators = [
  "Vannevar",
  "ExxonMobil",
  "Chevron",
  "Shell",
  "BP",
  "ConocoPhillips",
  "Occidental Petroleum",
  "Devon Energy",
  "EOG Resources",
  "Pioneer Natural Resources",
]

const wellNames = [
  "Eagle Ford #1",
  "Permian Basin #42",
  "Bakken Shale #7",
  "Marcellus #15",
  "Haynesville #3",
  "Wolfcamp #22",
  "Spraberry #11",
  "Delaware Basin #8",
  "Utica #5",
  "Niobrara #9",
]

const locations = [
  "Texas - Permian Basin",
  "Texas - Eagle Ford",
  "North Dakota - Bakken",
  "Pennsylvania - Marcellus",
  "Louisiana - Haynesville",
  "Colorado - Niobrara",
  "Oklahoma - SCOOP/STACK",
  "Wyoming - Powder River",
  "New Mexico - Delaware Basin",
  "Ohio - Utica",
]

const systemTypes = [
  "Production Tubing",
  "Casing",
  "Drill Pipe",
  "Completion",
  "Wellhead",
  "BOP",
  "Subsea",
  "Artificial Lift",
  "Downhole Tools",
  "Surface Equipment",
]

const grades = [
  "API 5CT L80",
  "API 5CT P110",
  "API 5CT Q125",
  "API 5CT N80",
  "API 5CT C90",
  "API 5CT T95",
  "API 5CT J55",
  "API 5CT K55",
  "API 5CT C75",
  "API 5CT V150",
]

const odSizes = [
  "2 3/8",
  "2 7/8",
  "3 1/2",
  "4 1/2",
  "5",
  "5 1/2",
  "6 5/8",
  "7",
  "7 5/8",
  "8 5/8",
  "9 5/8",
  "10 3/4",
  "13 3/8",
]

const formSchema = z.object({
  operator: z.string({
    required_error: "Please select an operator.",
  }),
  wellName: z.string({
    required_error: "Please select a well name.",
  }),
  location: z.string({
    required_error: "Please select a location.",
  }),
  systemType: z.string({
    required_error: "Please select a system type.",
  }),
  grade: z.string({
    required_error: "Please select a grade.",
  }),
  odSize: z.string({
    required_error: "Please select an OD size.",
  }),
  requestDate: z.date({
    required_error: "Please select a request date.",
  }),
  requiredDate: z.date({
    required_error: "Please select a required date.",
  }).refine((date) => date > new Date(), {
    message: "Required date must be in the future.",
  }),
  contactName: z.string().min(2, {
    message: "Contact name must be at least 2 characters.",
  }),
  contactEmail: z.string().email({
    message: "Please enter a valid email address.",
  }),
  contactPhone: z.string().regex(/^\+?[\d\s-()]{10,}$/, {
    message: "Please enter a valid phone number.",
  }),
  jobDescription: z.string().min(10, {
    message: "Job description must be at least 10 characters.",
  }),
}).refine((data) => data.requiredDate > data.requestDate, {
  message: "Required date must be after request date",
  path: ["requiredDate"],
})

export function JobRequestForm() {
  const { toast } = useToast()
  const { pdfData } = usePdfContext()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      operator: "Vannevar", // Default to Vannevar
      wellName: "",
      location: "",
      systemType: "",
      grade: "",
      odSize: "",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      jobDescription: "",
    },
  })

  // Update form when PDF data changes
  useEffect(() => {
    if (pdfData) {
      // Map PDF data to form fields
      const formValues: Partial<z.infer<typeof formSchema>> = {}

      if (pdfData?.operator) {
        const matchedOperator = operators.find((op) => 
          pdfData.operator?.toLowerCase().includes(op.toLowerCase())
        )
        if (matchedOperator) formValues.operator = matchedOperator
      }

      if (pdfData?.wellName) {
        const matchedWell = wellNames.find((well) => 
          pdfData.wellName?.toLowerCase().includes(well.toLowerCase())
        )
        if (matchedWell) formValues.wellName = matchedWell
      }

      if (pdfData?.location) {
        const matchedLocation = locations.find((loc) => 
          pdfData.location?.toLowerCase().includes(loc.toLowerCase())
        )
        if (matchedLocation) formValues.location = matchedLocation
      }

      if (pdfData?.systemType) {
        const matchedSystem = systemTypes.find((sys) => 
          pdfData.systemType?.toLowerCase().includes(sys.toLowerCase())
        )
        if (matchedSystem) formValues.systemType = matchedSystem
      }

      if (pdfData?.grade) {
        const matchedGrade = grades.find((g) => 
          pdfData.grade?.toLowerCase().includes(g.toLowerCase())
        )
        if (matchedGrade) formValues.grade = matchedGrade
      }

      if (pdfData?.odSize) {
        const matchedOD = odSizes.find((od) => 
          pdfData.odSize?.toLowerCase().includes(od.toLowerCase())
        )
        if (matchedOD) formValues.odSize = matchedOD
      }

      if (pdfData.contactName) formValues.contactName = pdfData.contactName
      if (pdfData.contactEmail) formValues.contactEmail = pdfData.contactEmail
      if (pdfData.contactPhone) formValues.contactPhone = pdfData.contactPhone
      if (pdfData.jobDescription) formValues.jobDescription = pdfData.jobDescription

      // Set form values
      Object.entries(formValues).forEach(([key, value]) => {
        if (value) {
          form.setValue(key as keyof z.infer<typeof formSchema>, value as any)
        }
      })
    }
  }, [pdfData, form])

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: "Job Request Submitted",
      description: "Your job request has been submitted successfully.",
    })
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="border-0 shadow-lg bg-white/75 dark:bg-gray-900/75 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center py-8 md:py-12">
            <CheckCircle2 className="h-12 w-12 md:h-16 md:w-16 text-green-500 mb-4" />
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-center">Job Request Submitted</h2>
            <p className="text-muted-foreground mb-6 text-center">Your job request has been submitted successfully.</p>
            <Button onClick={() => setIsSubmitted(false)}>Submit Another Request</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-0 shadow-lg bg-white/75 dark:bg-gray-900/75 backdrop-blur-sm">
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <FormField
                control={form.control}
                name="operator"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Operator</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select operator" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {operators.map((operator) => (
                          <SelectItem key={operator} value={operator}>
                            {operator}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="wellName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Well Name</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select well name" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {wellNames.map((wellName) => (
                          <SelectItem key={wellName} value={wellName}>
                            {wellName}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {locations.map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="systemType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>System Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select system type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {systemTypes.map((systemType) => (
                          <SelectItem key={systemType} value={systemType}>
                            {systemType}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="grade"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Grade</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select grade" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {grades.map((grade) => (
                          <SelectItem key={grade} value={grade}>
                            {grade}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="odSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>OD (in)</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select OD size" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {odSizes.map((odSize) => (
                          <SelectItem key={odSize} value={odSize}>
                            {odSize}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="requestDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Request Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                          >
                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="requiredDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Required Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                          >
                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              <FormField
                control={form.control}
                name="contactName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contactEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john.doe@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contactPhone"
                render={({ field }) => (
                  <FormItem className="sm:col-span-2 md:col-span-1">
                    <FormLabel>Contact Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="(555) 123-4567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="jobDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Provide details about the job request..."
                      className="resize-none min-h-[100px] md:min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Include any specific requirements or details about the job.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button type="submit">Submit Job Request</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

