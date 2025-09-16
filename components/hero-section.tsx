import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap, Building2, Factory, Wrench } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background via-muted/30 to-background py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                Commercial Grade Solar Solution
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-balance leading-tight">
                10KVA Inverter System
                <span className="block text-primary">Power Your Business</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-2xl">
                Commercial grade solar solution designed for businesses, office buildings, and industrial applications.
                Reliable, efficient, and built to last.
              </p>
            </div>

            {/* Price */}
            <div className="bg-card border rounded-lg p-4 sm:p-6">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">₦10,726,516</span>
                <span className="text-muted-foreground">.00</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Complete system with installation</p>
            </div>

            {/* Use Cases */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="flex flex-col items-center text-center p-3 bg-muted/50 rounded-lg">
                <Building2 className="h-6 w-6 text-primary mb-2" />
                <span className="text-xs sm:text-sm font-medium">Office Buildings</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 bg-muted/50 rounded-lg">
                <Factory className="h-6 w-6 text-primary mb-2" />
                <span className="text-xs sm:text-sm font-medium">Small Business</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 bg-muted/50 rounded-lg">
                <Zap className="h-6 w-6 text-primary mb-2" />
                <span className="text-xs sm:text-sm font-medium">Heavy Appliances</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 bg-muted/50 rounded-lg">
                <Wrench className="h-6 w-6 text-primary mb-2" />
                <span className="text-xs sm:text-sm font-medium">Industrial Use</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button size="lg" className="flex-1 sm:flex-none">
                Get Free Quote
              </Button>
              <Button variant="outline" size="lg" className="flex-1 sm:flex-none bg-transparent">
                View Specifications
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square lg:aspect-[4/3] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
              <img
                src="/commercial-solar-inverter-system-with-solar-panels.jpg"
                alt="10KVA Commercial Solar Inverter System"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
              <div className="text-sm font-medium">10KWH Lithium Battery</div>
              <div className="text-xs opacity-90">+ 12x 550W Solar Panels</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
