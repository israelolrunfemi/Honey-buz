import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, Shield, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function HeroBanner() {
  return (
    <section className="relative min-h-[600px] flex items-center hero-pattern">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <Badge className="honey-gradient text-white">🍯 Premium Quality Honey</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Pure Honey
                <span className="block text-primary">From Nature</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Discover our collection of premium, raw, and organic honey sourced directly from sustainable beekeepers
                worldwide.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="h-4 w-4 text-green-600" />
                <span>100% Pure & Natural</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Truck className="h-4 w-4 text-blue-600" />
                <span>Free Shipping</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="honey-gradient text-white">
                <Link href="/shop">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.9</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Honey Varieties</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Premium Honey Jar"
                fill
                className="object-contain"
                priority
              />

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                <div className="text-2xl">🐝</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg">
                <div className="text-2xl">🌻</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
