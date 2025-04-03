'use client'

import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push('/dashboard')
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Logo */}
      <div className="absolute top-4 left-4 z-10">
        <Image
          src="/images/vannevar-logo.png"
          alt="Vannevar Logo"
          width={150}
          height={50}
          className="object-contain"
        />
      </div>
      
      {/* Background Image */}
      <Image
        src="/images/pump-jack-bg.jpeg"
        alt="Background"
        fill
        className="object-cover -z-10 brightness-50"
      />
      
      <Card className="w-[90%] max-w-xl p-4 bg-white/90 backdrop-blur-sm">
        <CardHeader className="space-y-2">
          <CardTitle className="text-3xl font-bold text-center">Login</CardTitle>
          <CardDescription className="text-center text-lg">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <Button className="w-full" type="submit">
              Sign In
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 