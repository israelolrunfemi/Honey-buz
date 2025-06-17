import HeroBanner from "@/components/hero-banner"
import CategoryCard from "@/components/category-card"
import ProductCard from "@/components/product-card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { categories, products } from "@/lib/data"
import { Star, Users, Award, Leaf } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.isBestSeller || p.isNew).slice(0, 4)
  const newProducts = products.filter((p) => p.isNew).slice(0, 4)

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <HeroBanner />

      {/* Featured Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Categories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Honey Collection</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From wild forest honey to therapeutic varieties, discover the perfect honey for every taste and need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <Badge className="mb-4">Featured Products</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Best Selling Honey</h2>
              <p className="text-muted-foreground">Our most popular honey varieties loved by customers worldwide.</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/shop">View All Products</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge>Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Sustainably Sourced, Naturally Pure</h2>
              <p className="text-muted-foreground text-lg">
                For over two decades, we've partnered with ethical beekeepers around the world to bring you the finest
                honey while supporting bee conservation and sustainable practices.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Partner Beekeepers</div>
                </div>
              </div>
              <Button asChild className="honey-gradient text-white">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-2xl" />
              <div className="relative h-full bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🐝</div>
                  <h3 className="text-xl font-semibold">Bee-Friendly Practices</h3>
                  <p className="text-sm text-muted-foreground">
                    Supporting bee conservation and sustainable harvesting methods
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">New Arrivals</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fresh From The Hive</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our latest honey varieties and seasonal specialties.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Star className="h-8 w-8 text-yellow-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Premium Quality</h3>
                <p className="text-sm text-muted-foreground">
                  Only the finest, purest honey makes it to our collection
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-blue-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">10K+ Happy Customers</h3>
                <p className="text-sm text-muted-foreground">Trusted by honey lovers worldwide</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 text-purple-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Award Winning</h3>
                <p className="text-sm text-muted-foreground">Recognized for excellence in quality and sustainability</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Leaf className="h-8 w-8 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Eco-Friendly</h3>
                <p className="text-sm text-muted-foreground">Committed to sustainable and ethical practices</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
