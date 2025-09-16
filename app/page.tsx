import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { PaymentPlansSection } from "@/components/payment-plans-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <PaymentPlansSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}
