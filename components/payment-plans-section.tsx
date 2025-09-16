import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, CreditCard, Calendar } from "lucide-react"

export function PaymentPlansSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-4">
            Flexible Payment Options
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance mb-4">
            Choose Your
            <span className="block text-primary">Payment Plan</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            We offer flexible payment options to make solar energy accessible for your business. Choose between
            immediate purchase or convenient installment plans.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {/* Outright Payment */}
          <Card className="relative border-2 hover:border-primary/50 transition-colors">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl sm:text-2xl">Outright Payment</CardTitle>
              <p className="text-muted-foreground">Pay once and own your system immediately</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary">₦10,726,516</div>
                <p className="text-sm text-muted-foreground">One-time payment</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Immediate ownership</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">No interest charges</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Maximum savings</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Secure Paystack payment</span>
                </div>
              </div>

              <Button className="w-full" size="lg">
                Pay with Paystack
              </Button>
            </CardContent>
          </Card>

          {/* Installment Plan */}
          <Card className="relative border-2 border-primary/20 bg-primary/5">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
            </div>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl sm:text-2xl">Installment Plan</CardTitle>
              <p className="text-muted-foreground">Flexible monthly payments with our partners</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">From ₦1,974,000</div>
                <p className="text-sm text-muted-foreground">Starting monthly payment</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">6-24 month terms available</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Partnership with Creditcorp & Fidelity Bank</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Quick approval process</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Start saving immediately</span>
                </div>
              </div>

              <Button className="w-full bg-transparent" size="lg" variant="outline">
                Apply for Installment
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Need a custom payment plan?{" "}
            <Button variant="link" className="p-0 h-auto">
              Contact our sales team
            </Button>
          </p>
        </div>
      </div>
    </section>
  )
}
