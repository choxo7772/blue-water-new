import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Anchor, Fish, Users, Clock, Star, Trophy, Waves, Shield, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
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
            <div className="hidden md:flex items-center gap-6">
              <a
                href="tel:+13606703776"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>Call for Booking</span>
              </a>
              <Button
                asChild
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg"
              >
                <Link href="/book">Book Charter</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/ocean-waves-pattern.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-gradient-to-r from-accent to-primary text-white shadow-lg">
                <Trophy className="h-3 w-3 mr-1" />
                Premium Charter Service
              </Badge>
              <h1 className="font-heading text-5xl lg:text-7xl font-bold text-balance leading-tight">
                World-Class{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Billfish</span>{" "}
                Adventures
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-xl">
                Experience the thrill of deep-sea sport fishing in the pristine waters off Palm Beach, Florida. Our
                expert crew and premium equipment ensure an unforgettable fishing adventure targeting marlin, sailfish,
                and other trophy billfish.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-xl text-lg px-8"
                >
                  <Fish className="h-5 w-5 mr-2" />
                  Book Your Charter
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg text-lg px-8 bg-transparent"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">USCG Licensed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">15+ Years Experience</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 rounded-3xl p-8 shadow-2xl">
                <Image
                  src="/sport-fishing-boat-on-ocean-with-billfish-jumping.png"
                  alt="Blue Water Billfish Adventures charter boat with jumping billfish at sunset"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-card border border-border rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground p-3 rounded-xl">
                    <Waves className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold">Palm Beach Waters</p>
                    <p className="text-sm text-muted-foreground">Prime Fishing Location</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Premium Charter{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Choose from our range of expertly guided fishing experiences, each tailored to deliver the ultimate sport
              fishing adventure in the pristine waters of Palm Beach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform">
                  <Fish className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">Billfish Targeting</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  Target trophy billfish including marlin, sailfish, and spearfish in the deep waters of the Gulf
                  Stream.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    <span className="font-medium">Professional tackle & equipment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    <span className="font-medium">Expert crew guidance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    <span className="font-medium">Prime fishing locations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-accent to-accent/80 text-accent-foreground p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">Group Charters</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  Perfect for corporate events, family gatherings, or groups of friends seeking an unforgettable fishing
                  experience.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-accent to-primary rounded-full"></div>
                    <span className="font-medium">Customizable trip duration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-accent to-primary rounded-full"></div>
                    <span className="font-medium">Catering options available</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-accent to-primary rounded-full"></div>
                    <span className="font-medium">Photography services</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">Full Day Adventures</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  Extended fishing trips that maximize your time on the water and increase your chances of landing
                  trophy fish.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-secondary to-accent rounded-full"></div>
                    <span className="font-medium">8-10 hour fishing trips</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-secondary to-accent rounded-full"></div>
                    <span className="font-medium">Multiple fishing locations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-secondary to-accent rounded-full"></div>
                    <span className="font-medium">Lunch & refreshments included</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary text-primary-foreground">
                <Star className="h-3 w-3 mr-1" />
                Expert Captain
              </Badge>
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-balance">
                Meet Captain <span className="text-primary">Byron Thomas</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With years of experience navigating the waters off Palm Beach, Captain Byron Thomas brings unmatched
                expertise and passion to every charter. His deep knowledge of local fishing grounds and commitment to
                safety ensures an exceptional experience for all guests.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Experience</h4>
                  <p className="text-sm text-muted-foreground">15+ years professional fishing</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Specialization</h4>
                  <p className="text-sm text-muted-foreground">Billfish & deep-sea sport fishing</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Certifications</h4>
                  <p className="text-sm text-muted-foreground">USCG Licensed Captain</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Safety Record</h4>
                  <p className="text-sm text-muted-foreground">100% safety compliance</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6">
                <Image
                  src="/images/owner-byron.jpg"
                  alt="Captain Byron Thomas - Owner of Blue Water Billfish Adventures"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="bg-accent text-accent-foreground p-2 rounded-lg">
                    <Trophy className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Captain & Owner</p>
                    <p className="text-xs text-muted-foreground">Since 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold mb-4">
              Ready to Book Your <span className="text-primary">Adventure?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Contact us today to schedule your premium sport fishing charter and experience the thrill of deep-sea
              fishing in Palm Beach waters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="border-border">
              <CardContent className="p-8">
                <h3 className="font-playfair text-xl font-semibold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">byron@bluewaterbillfish.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-600 text-primary-foreground p-2 rounded-lg">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+13606703776" className="text-sm text-muted-foreground">(360) 670-3776</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-accent text-accent-foreground p-2 rounded-lg">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">227 Angler Ave, Palm Beach, FL 33480</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary text-secondary-foreground p-2 rounded-lg">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Operating Hours</p>
                      <p className="text-sm text-muted-foreground">Daily: 5:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-8">
                <h3 className="font-playfair text-xl font-semibold mb-6">Company Information</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-foreground">Blue Water Billfish Adventures LLC</p>
                    <p className="text-sm text-muted-foreground">Florida Limited Liability Company</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Established</p>
                    <p className="text-sm text-muted-foreground">November 2, 2021</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Owner & Captain</p>
                    <p className="text-sm text-muted-foreground">Byron Busch Thomas</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link href="/book">
                      <span className="inline-flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        Book Your Charter Today
                      </span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-secondary to-primary text-secondary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <Anchor className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading font-semibold">Blue Water Billfish Adventures LLC</h3>
                <p className="text-sm text-secondary-foreground/80">Premium Sport Fishing Charters</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="flex items-center gap-4 justify-center md:justify-end mb-2 text-sm">
                <Link href="/privacy">Privacy</Link>
                <Link href="/terms">Terms</Link>
                <Link href="/security">Security</Link>
              </div>
              <p className="text-sm text-secondary-foreground/80">
                © 2025 Blue Water Billfish Adventures LLC. All rights reserved.
              </p>
              <p className="text-xs text-secondary-foreground/60 mt-1">Licensed & Insured • USCG Compliant</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
