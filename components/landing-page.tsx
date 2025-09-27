"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, MapPin, Square, Store, Phone, MessageCircle, Shield, Users, CheckCircle } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function LandingPage() {
  const [selectedCity] = useState("Nagpur") // Can be made dynamic later

  const categories = [
    {
      icon: Building2,
      title: "Flats",
      description: "Residential apartments & flats",
      color: "bg-gradient-to-br from-[#6A5CFF]/20 to-[#9D5BFF]/20 text-[#6A5CFF] border-[#6A5CFF]/30",
    },
    {
      icon: Square,
      title: "Land",
      description: "Agricultural & residential land",
      color: "bg-gradient-to-br from-[#6A5CFF]/20 to-[#9D5BFF]/20 text-[#6A5CFF] border-[#6A5CFF]/30",
    },
    {
      icon: MapPin,
      title: "Plots",
      description: "Residential & commercial plots",
      color: "bg-gradient-to-br from-[#6A5CFF]/20 to-[#9D5BFF]/20 text-[#6A5CFF] border-[#6A5CFF]/30",
    },
    {
      icon: Store,
      title: "Commercial",
      description: "Offices, shops & warehouses",
      color: "bg-gradient-to-br from-[#6A5CFF]/20 to-[#9D5BFF]/20 text-[#6A5CFF] border-[#6A5CFF]/30",
    },
  ]

  const trustFeatures = [
    {
      icon: Shield,
      title: "Verified Owners",
      description: "Direct contact with property owners",
    },
    {
      icon: Users,
      title: "No Brokers",
      description: "Skip the middleman, save money",
    },
    {
      icon: CheckCircle,
      title: "Trusted Platform",
      description: "Secure and reliable transactions",
    },
  ]

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(135deg, #FAFAFB 0%, #F7F8FC 100%)" }}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Hometro" width={40} height={40} className="rounded-lg" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Hometro</h1>
              <p className="text-xs text-gray-500">Direct Property Deals</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6 bg-white">
            <a
              href="tel:+918080961469"
              className="rounded-full border-2 border-[#6A5CFF] text-[#6A5CFF] bg-white hover:bg-gradient-to-r hover:from-[#6A5CFF] hover:to-[#9D5BFF] hover:text-white hover:scale-105 transition-all duration-200 shadow-md px-6 py-2 font-semibold flex items-center gap-2 focus:ring-2 focus:ring-[#6A5CFF]/50"
            >
              <Phone className="w-4 h-4 mr-2 animate-pulse" />
              Contact
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Find or Sell Property
              {/* City name only shown if selectedCity exists */}
              {selectedCity && (
                <>
                  {" in "}
                  <span className="relative bg-gradient-to-r from-[#6A5CFF] to-[#9D5BFF] bg-clip-text text-transparent">
                    {selectedCity}
                    <div
                      className="absolute -bottom-2 left-3 right-0 h-1 rounded-full"
                      style={{
                        background: "linear-gradient(135deg, #6A5CFF 0%, #9D5BFF 100%)",
                        opacity: 0.3,
                      }}
                    ></div>
                  </span>
                </>
              )}
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">No Brokers, Verified Owners</h2>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              Connect directly with property owners. Save on brokerage fees. Get verified listings with complete
              transparency and trust.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6A5CFF] to-[#9D5BFF] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300"
                onClick={() => window.open("https://tally.so/r/w5RgO6", "_blank")}
              >
                List Your Property Free
                <Building2 className="ml-2 w-5 h-5" />
              </Button>
              {/* <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#6A5CFF] text-[#6A5CFF] hover:bg-gradient-to-r hover:from-[#6A5CFF] hover:to-[#9D5BFF] hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                onClick={() => window.open("https://wa.me/your-number", "_blank")}
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Contact for Verified Properties
              </Button> */}
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {trustFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center space-x-3 p-4 rounded-xl"
                >
                  <feature.icon className="w-6 h-6 text-[#6A5CFF]" />
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900 text-sm">{feature.title}</h3>
                    <p className="text-xs text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Property Categories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse through our verified property listings across different categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {categories.map((category, index) => {
              // Define a color for each icon, fallback to a default if not present
              const iconColors = [
                "#6A5CFF", // Indigo
                "#FFB300", // Amber
                "#00B894", // Green
                "#FF5B5B", // Red
                "#00BFFF", // Blue
                "#FF69B4", // Pink
                "#FFA500", // Orange
                "#20C997", // Teal
              ];
              const iconColor = iconColors[index % iconColors.length];
              return (
                <Card
                  key={index}
                  className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-[#6A5CFF]/30 bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${category.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <category.icon className="w-8 h-8" style={{ color: iconColor }} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                    <div className="mt-4 text-[#6A5CFF] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Explore {category.title.toLowerCase()} →
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#FAFAFB] to-[#F7F8FC] text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of property owners and buyers who trust Hometro for direct, transparent deals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6A5CFF] to-[#9D5BFF] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300"
                onClick={() =>
                  window.open("https://tally.so/r/w5RgO6", "_blank")
                }
              >
                List Property Now
              </Button>
              <Button
                size="lg"
                className="bg-black text-white px-8 py-4 rounded-xl hover:opacity-80 transition-all duration-300"
                onClick={() =>
                  window.open("https://wa.me/918080961469", "_blank")
                }
              >
                <MessageCircle className="mr-2 w-5 h-5" /> WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-white">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="flex items-center mb-3">
            <span className="text-gray-400 text-sm mr-2">Follow us on</span>
            <a
              href="https://instagram.com/hometro.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg>
            </a>
          </div>
          <p className="text-xs text-gray-400 text-center">
            © 2025 Hometro. Find the space in easy way!
          </p>
        </div>
      </footer>
    </div>
  )
}
