"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Fish, Phone, Mail, MapPin, Anchor, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function BookingPage() {
  const [formData, setFormData] = useState({
    charterType: "",
    date: "",
    time: "",
    duration: "",
    groupSize: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your booking system
    console.log("Booking submitted:", formData)
    alert("Thank you for your booking request! Captain Byron will contact you within 24 hours to confirm your charter.")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card/30 to-accent/5">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground p-2 rounded-xl shadow-lg">
                <Anchor className="h-6 w-6" />
              </div>
              <div>
                <h1 className="font-heading text-xl font-bold text-foreground">Blue Water Billfish Adventures</h1>
                <p className="text-sm text-muted-foreground">Premium Sport Fishing Charters</p>
              </div>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg bg-transparent"
            >
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Booking Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/ocean-waves-pattern.png')] opacity-5"></div>
        <div className="container mx-auto px-4 max-w-4xl relative">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-primary to-accent text-white shadow-lg mb-6">
              <Fish className="h-3 w-3 mr-1" />
              Charter Booking
            </Badge>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Book Your{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Fishing Adventure
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Reserve your premium sport fishing charter with Captain Byron Thomas. Fill out the form below and we'll
              contact you within 24 hours to confirm your booking.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="border-border shadow-2xl hover:shadow-3xl transition-all duration-300 bg-card/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-t-lg">
                  <CardTitle className="font-heading text-2xl">Charter Details</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Charter Type */}
                    <div className="space-y-3">
                      <Label htmlFor="charterType" className="text-base font-medium">
                        Charter Type
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("charterType", value)}>
                        <SelectTrigger className="h-12 border-2 focus:border-primary">
                          <SelectValue placeholder="Select charter type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="half-day">Half Day Charter (4-5 hours) - $800</SelectItem>
                          <SelectItem value="full-day">Full Day Charter (8-10 hours) - $1,400</SelectItem>
                          <SelectItem value="billfish-special">Billfish Special (12 hours) - $1,800</SelectItem>
                          <SelectItem value="sunset">Sunset Charter (3 hours) - $600</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Date and Time */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="date" className="text-base font-medium">
                          Preferred Date
                        </Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => handleInputChange("date", e.target.value)}
                          required
                          className="h-12 border-2 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="time" className="text-base font-medium">
                          Preferred Start Time
                        </Label>
                        <Select onValueChange={(value) => handleInputChange("time", value)}>
                          <SelectTrigger className="h-12 border-2 focus:border-primary">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5:00">5:00 AM</SelectItem>
                            <SelectItem value="6:00">6:00 AM</SelectItem>
                            <SelectItem value="7:00">7:00 AM</SelectItem>
                            <SelectItem value="8:00">8:00 AM</SelectItem>
                            <SelectItem value="15:00">3:00 PM (Sunset Charter)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Group Size */}
                    <div className="space-y-3">
                      <Label htmlFor="groupSize" className="text-base font-medium">
                        Number of Anglers
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("groupSize", value)}>
                        <SelectTrigger className="h-12 border-2 focus:border-primary">
                          <SelectValue placeholder="Select group size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Person</SelectItem>
                          <SelectItem value="2">2 People</SelectItem>
                          <SelectItem value="3">3 People</SelectItem>
                          <SelectItem value="4">4 People</SelectItem>
                          <SelectItem value="5">5 People</SelectItem>
                          <SelectItem value="6">6 People (Maximum)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6">
                      <h3 className="font-heading text-xl font-semibold">Contact Information</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <Label htmlFor="firstName" className="text-base font-medium">
                            First Name
                          </Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            required
                            className="h-12 border-2 focus:border-primary"
                          />
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="lastName" className="text-base font-medium">
                            Last Name
                          </Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            required
                            className="h-12 border-2 focus:border-primary"
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <Label htmlFor="email" className="text-base font-medium">
                            Email Address
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                            className="h-12 border-2 focus:border-primary"
                          />
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="phone" className="text-base font-medium">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            required
                            className="h-12 border-2 focus:border-primary"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div className="space-y-3">
                      <Label htmlFor="specialRequests" className="text-base font-medium">
                        Special Requests or Questions
                      </Label>
                      <Textarea
                        id="specialRequests"
                        placeholder="Any special requests, dietary restrictions, experience level, or questions..."
                        value={formData.specialRequests}
                        onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                        rows={4}
                        className="border-2 focus:border-primary resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-xl text-lg py-6"
                      size="lg"
                    >
                      <Fish className="h-5 w-5 mr-2" />
                      Submit Booking Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Booking Information Sidebar */}
            <div className="space-y-6">
              {/* What's Included */}
              <Card className="border-border shadow-xl hover:shadow-2xl transition-all duration-300 bg-card/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-t-lg">
                  <CardTitle className="font-heading text-xl text-center">What's Included</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-center gap-3 text-base">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    <span>Professional fishing equipment</span>
                  </div>
                  <div className="flex items-center gap-3 text-base">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    <span>Bait and tackle</span>
                  </div>
                  <div className="flex items-center gap-3 text-base">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    <span>Ice and fish cleaning</span>
                  </div>
                  <div className="flex items-center gap-3 text-base">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    <span>Safety equipment</span>
                  </div>
                  <div className="flex items-center gap-3 text-base">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    <span>Expert guidance from Captain Byron</span>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="border-2 border-border/50 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-card/90 backdrop-blur-md ring-1 ring-border/20">
                <CardHeader className="bg-gradient-to-r from-accent/15 to-primary/15 rounded-t-lg border-b-2 border-border/40 pb-6 pt-6">
                  <CardTitle className="font-heading text-xl text-center font-bold">Contact Captain Byron</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-3 rounded-xl shadow-lg ring-2 ring-primary/20 flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-base">Call Direct</p>
                      <p className="text-muted-foreground">(360) 670-3776</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-accent to-accent/80 text-accent-foreground p-3 rounded-xl shadow-lg ring-2 ring-accent/20 flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-base">Email</p>
                      <p className="text-muted-foreground text-sm font-mono leading-relaxed break-all">
                        byron@bluewaterbillfish.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground p-3 rounded-xl shadow-lg ring-2 ring-secondary/20 flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-base">Marina Location</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">227 Angler Ave, Palm Beach, FL</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Booking Policy */}
              <Card className="border-border shadow-xl hover:shadow-2xl transition-all duration-300 bg-card/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-secondary/5 to-accent/5 rounded-t-lg">
                  <CardTitle className="font-heading text-xl text-center">Booking Policy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground p-6">
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>50% deposit required to secure booking</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>48-hour cancellation policy</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Weather-dependent (full refund for cancellations due to unsafe conditions)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Maximum 6 anglers per charter</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Florida fishing license required (can be purchased online)</span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
