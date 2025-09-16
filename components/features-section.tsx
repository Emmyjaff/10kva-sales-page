import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Battery, Sun, Shield, Zap, Clock, Wrench, TrendingUp, Leaf } from "lucide-react"

const features = [
  {
    icon: Battery,
    title: "10KWH Lithium Battery",
    description: "High-capacity lithium-ion battery for extended power backup and optimal energy storage.",
    badge: "Long-lasting",
  },
  {
    icon: Sun,
    title: "12x 550W Solar Panels",
    description: "Premium solar panels with high efficiency rating for maximum energy generation.",
    badge: "High Efficiency",
  },
  {
    icon: Shield,
    title: "5-Year Warranty",
    description: "Comprehensive warranty coverage for complete peace of mind and protection.",
    badge: "Protected",
  },
  {
    icon: Zap,
    title: "10KVA Power Output",
    description: "Reliable 10KVA output capacity suitable for commercial and industrial applications.",
    badge: "Commercial Grade",
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description: "Real-time system monitoring and performance tracking via mobile app.",
    badge: "Smart Tech",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description: "Expert installation by certified technicians with ongoing support.",
    badge: "Expert Service",
  },
  {
    icon: TrendingUp,
    title: "ROI in 3-5 Years",
    description: "Significant cost savings on electricity bills with quick return on investment.",
    badge: "Cost Effective",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Reduce carbon footprint and contribute to sustainable energy solutions.",
    badge: "Green Energy",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-4">
            System Features
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance mb-4">
            Everything You Need for
            <span className="block text-primary">Reliable Solar Power</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            Our 10KVA system comes complete with premium components, professional installation, and ongoing support to
            ensure optimal performance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="relative group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-sm sm:text-base">{feature.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {feature.badge}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground text-pretty">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
