import Header from "@/components/header"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Leaf, Heart, Award, Users, Shield, Globe } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4">Our Story</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sweet Stories from the Hive</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over 25 years, Golden Hive has been dedicated to bringing you the world's finest honey while supporting
            sustainable beekeeping and bee conservation efforts worldwide.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground text-lg">
                We believe that exceptional honey comes from happy, healthy bees and ethical beekeeping practices. Our
                mission is to source the finest honey from sustainable apiaries while supporting local beekeepers and
                protecting bee populations for future generations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Leaf className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Sustainable Sourcing</h3>
                    <p className="text-sm text-muted-foreground">
                      We partner only with beekeepers who practice sustainable and ethical methods
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Bee Conservation</h3>
                    <p className="text-sm text-muted-foreground">
                      Supporting bee health and habitat preservation through our partnerships
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-yellow-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Premium Quality</h3>
                    <p className="text-sm text-muted-foreground">
                      Every jar meets our strict standards for purity, taste, and nutritional value
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-2xl p-8">
                <div className="h-full bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-8xl">🐝</div>
                    <h3 className="text-2xl font-bold">25+ Years</h3>
                    <p className="text-muted-foreground">of honey expertise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do, from sourcing to customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Purity & Quality</h3>
                <p className="text-sm text-muted-foreground">
                  We never compromise on quality. Every product is tested for purity and meets our rigorous standards
                  before reaching your table.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Community Support</h3>
                <p className="text-sm text-muted-foreground">
                  We believe in supporting local beekeeping communities and providing fair compensation for their
                  valuable work.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Environmental Responsibility</h3>
                <p className="text-sm text-muted-foreground">
                  Our packaging is eco-friendly, and we actively support bee conservation and environmental protection
                  initiatives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind Golden Hive who make our mission possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  JD
                </div>
                <h3 className="font-semibold text-lg mb-1">Jane Doe</h3>
                <p className="text-sm text-muted-foreground mb-3">Founder & CEO</p>
                <p className="text-sm text-muted-foreground">
                  A third-generation beekeeper with a passion for sustainable agriculture and bee conservation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  MS
                </div>
                <h3 className="font-semibold text-lg mb-1">Mike Smith</h3>
                <p className="text-sm text-muted-foreground mb-3">Head of Quality</p>
                <p className="text-sm text-muted-foreground">
                  Ensures every batch meets our strict quality standards through rigorous testing and evaluation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  SJ
                </div>
                <h3 className="font-semibold text-lg mb-1">Sarah Johnson</h3>
                <p className="text-sm text-muted-foreground mb-3">Sustainability Director</p>
                <p className="text-sm text-muted-foreground">
                  Leads our environmental initiatives and partnerships with sustainable beekeeping operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Taste the Difference?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the pure, natural sweetness of our premium honey collection. Every jar tells a story of
            sustainable beekeeping and environmental stewardship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="honey-gradient text-white">
              <Link href="/shop">Shop Our Collection</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
