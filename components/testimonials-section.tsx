import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Adebayo Ogundimu",
    role: "Operations Manager",
    company: "Lagos Manufacturing Ltd",
    content:
      "The 10KVA system has completely transformed our energy costs. We've reduced our electricity bills by 80% and the system runs flawlessly even during peak production hours.",
    rating: 5,
    savings: "80% reduction in electricity costs",
  },
  {
    name: "Sarah Okoro",
    role: "Facility Director",
    company: "Abuja Business Center",
    content:
      "Professional installation, excellent customer service, and the ROI was achieved in just 3 years. Our tenants love the reliable power supply.",
    rating: 5,
    savings: "ROI achieved in 3 years",
  },
  {
    name: "Ibrahim Musa",
    role: "Factory Owner",
    company: "Kano Textiles",
    content:
      "The installment plan made it possible for us to upgrade to solar. The monthly payments are less than what we used to spend on diesel generators.",
    rating: 5,
    savings: "Lower than diesel costs",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-4">
            Customer Success Stories
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance mb-4">
            Trusted by Businesses
            <span className="block text-primary">Across Nigeria</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            See how our 10KVA solar systems are helping businesses reduce costs, improve reliability, and achieve energy
            independence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <div className="relative mb-4">
                  <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-sm sm:text-base text-muted-foreground italic pl-6">"{testimonial.content}"</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="font-semibold text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>

                  <Badge variant="outline" className="text-xs">
                    {testimonial.savings}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
