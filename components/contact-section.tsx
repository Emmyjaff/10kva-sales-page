"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const nigerianStates = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
]

const systems = [
  { value: "1.5kva", label: "1.5KVA Inverter System - ₦1,974,000", price: 1974000 },
  { value: "3kva", label: "3KVA Inverter System - ₦3,500,000", price: 3500000 },
  { value: "5kva", label: "5KVA Inverter System - ₦5,800,000", price: 5800000 },
  { value: "10kva", label: "10KVA Inverter System - ₦10,726,516", price: 10726516 },
]

const paymentTerms = [
  { value: "6", label: "6 months" },
  { value: "12", label: "12 months" },
  { value: "18", label: "18 months" },
  { value: "24", label: "24 months" },
]

const salaryRanges = [
  "₦50,000 - ₦100,000",
  "₦100,000 - ₦200,000",
  "₦200,000 - ₦500,000",
  "₦500,000 - ₦1,000,000",
  "Above ₦1,000,000",
]

export function ContactSection() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    system: "",
    payment: "",
    workplace: "",
    placeOfWork: "",
    salaryRange: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://stroom-interest-form.onrender.com/api/forms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          state: formData.state,
          system: formData.system,
          systemPrice: systems.find((s) => s.value === formData.system)?.price || 0,
          payment: formData.payment,
          workplace: formData.workplace,
          placeOfWork: formData.placeOfWork,
          salaryRange: formData.salaryRange,
        }),
      })

      if (response.ok) {
        toast({
          title: "Application Submitted!",
          description: "We'll review your application and contact you within 24 hours.",
        })
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          state: "",
          system: "",
          payment: "",
          workplace: "",
          placeOfWork: "",
          salaryRange: "",
        })
      } else {
        throw new Error("Failed to submit application")
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-4">
            Get Started Today
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance mb-4">
            Ready to Switch to
            <span className="block text-primary">Solar Energy?</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            Apply for our installment plan or contact us for immediate purchase. Our team will guide you through the
            entire process.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">+234 093 383 8340</div>
                    <div className="text-sm text-muted-foreground">Call or WhatsApp</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">emmyjaff22@gmail.com</div>
                    <div className="text-sm text-muted-foreground">Email us anytime</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Akwa Ibom State</div>
                    <div className="text-sm text-muted-foreground">Nigeria</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">24/7 Support</div>
                    <div className="text-sm text-muted-foreground">Always available</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Quick Purchase</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Ready to buy immediately? Use our secure Paystack payment system.
                </p>
                <Button className="w-full">Pay ₦10,726,516 Now</Button>
              </CardContent>
            </Card>
          </div>

          {/* Application Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Installment Plan Application</CardTitle>
                <p className="text-muted-foreground">
                  Fill out this form to apply for our flexible payment plan in partnership with Creditcorp and Fidelity
                  Bank.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Emmanuel Odion Jafaru"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="emmyjaff22@gmail.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+2340933838340"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State *</Label>
                      <Select value={formData.state} onValueChange={(value) => handleInputChange("state", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your state" />
                        </SelectTrigger>
                        <SelectContent>
                          {nigerianStates.map((state) => (
                            <SelectItem key={state} value={state}>
                              {state}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address *</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      placeholder="Enter your full address"
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="system">System Type *</Label>
                      <Select value={formData.system} onValueChange={(value) => handleInputChange("system", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select system" />
                        </SelectTrigger>
                        <SelectContent>
                          {systems.map((system) => (
                            <SelectItem key={system.value} value={system.value}>
                              {system.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="payment">Payment Term *</Label>
                      <Select value={formData.payment} onValueChange={(value) => handleInputChange("payment", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select payment term" />
                        </SelectTrigger>
                        <SelectContent>
                          {paymentTerms.map((term) => (
                            <SelectItem key={term.value} value={term.value}>
                              {term.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="workplace">Workplace Type *</Label>
                      <Select
                        value={formData.workplace}
                        onValueChange={(value) => handleInputChange("workplace", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select workplace type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="private">Private</SelectItem>
                          <SelectItem value="government">Government</SelectItem>
                          <SelectItem value="self-employed">Self-Employed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="placeOfWork">Place of Work *</Label>
                      <Input
                        id="placeOfWork"
                        value={formData.placeOfWork}
                        onChange={(e) => handleInputChange("placeOfWork", e.target.value)}
                        placeholder="Company/Organization name"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="salaryRange">Monthly Income Range *</Label>
                    <Select
                      value={formData.salaryRange}
                      onValueChange={(value) => handleInputChange("salaryRange", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select income range" />
                      </SelectTrigger>
                      <SelectContent>
                        {salaryRanges.map((range) => (
                          <SelectItem key={range} value={range}>
                            {range}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting Application..." : "Submit Application"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our terms and conditions. We'll review your application and
                    contact you within 24 hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
