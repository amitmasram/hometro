"use client"

import { Button } from "@/components/ui/button"
import { Building2, Phone, MessageCircle, Search } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function LandingPage() {
  const [selectedCity] = useState("Nagpur") // Can be made dynamic later

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-gray-900">
      {/* Header */}
      <header className="sticky top-2 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/60">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 mx-auto py-3 flex items-center justify-between max-w-screen-2xl">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Image src="/logo.png" alt="Hometro" width={36} height={36} className="rounded-lg shadow-sm w-8 h-8 sm:w-9 sm:h-9" />
            <div>
              <h1 className="text-base sm:text-lg font-semibold tracking-tight text-gray-900">Hometro</h1>
              {/* <p className="text-[11px] text-gray-500">Direct property deals, no brokers</p> */}
            </div>
          </div>
          <div className="flex items-center">
            <a
              href="tel:+918080961469"
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#6A5CFF]/40 bg-white/80 px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-[#4C46BF] shadow-sm hover:border-[#6A5CFF] hover:bg-[#EEF2FF] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="whitespace-nowrap">Talk to us</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs sm:text-sm font-medium text-gray-600 ring-1 ring-gray-200 mb-4 sm:mb-6">
              <span className="mr-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Direct deals. No brokers.
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
              Find or sell property
              {/* City name only shown if selectedCity exists */}
              {selectedCity && (
                <>
                  {" in "}
                  <span className="relative bg-gradient-to-r from-[#6A5CFF] to-[#9D5BFF] bg-clip-text text-transparent">
                    {selectedCity}
                    <div
                      className="pointer-events-none absolute -bottom-1 left-1 right-0 h-0.5 rounded-full"
                      style={{
                        background: "linear-gradient(135deg, #6A5CFF 0%, #9D5BFF 100%)",
                        opacity: 0.25,
                      }}
                    ></div>
                  </span>
                </>
              )}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-6 sm:mb-8 md:mb-7 max-w-2xl mx-auto px-2 sm:px-4">
              Hometro helps you connect directly with owners and close faster without brokerage.
            </p>

            {/* Search Bar */}
            <div className="mt-6 sm:mt-8 max-w-2xl mx-auto px-2 sm:px-0">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6A5CFF] to-[#9D5BFF] rounded-2xl opacity-0 group-hover:opacity-10 group-focus-within:opacity-10 blur-xl transition-opacity duration-300"></div>
                <div className="relative flex items-center bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group-focus-within:border-[#6A5CFF]/50 group-focus-within:shadow-lg">
                  <input
                    type="search"
                    placeholder="Search properties, locations, or keywords..."
                    className="w-full pl-4 sm:pl-6 pr-16 sm:pr-20 py-3 sm:py-4 text-sm sm:text-base text-gray-900 placeholder-gray-400 bg-transparent border-0 rounded-2xl focus:outline-none focus:ring-0"
                  />
                  <div className="absolute right-2 sm:right-3 flex items-center justify-center">
                    <div className="bg-gradient-to-r from-[#6A5CFF] to-[#9D5BFF] rounded-full p-2 sm:p-2.5 group-hover:scale-105 transition-transform duration-300">
                      <Search className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 px-4">
              Verified owners • No brokers • Quick support on WhatsApp
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-10 sm:py-12 md:py-14 bg-[#F9FAFB] text-center">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-3 sm:mb-4 tracking-tight px-2 sm:px-0">
              Get started in 30 seconds
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-6 sm:mb-8 md:mb-7 px-4 sm:px-2">
              List your property for free, or message us on WhatsApp and we’ll help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#6A5CFF] to-[#9D5BFF] text-white px-4 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base font-medium rounded-full shadow-md hover:shadow-lg hover:opacity-95 transition-all duration-200 w-auto self-center"
                onClick={() =>
                  window.open("https://tally.so/r/w5RgO6", "_blank")
                }
              >
                List your property
                <Building2 className="ml-2 w-4 h-4" />
              </Button>
              <a
                href="https://wa.me/918080961469"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gray-300 text-gray-700 bg-white hover:border-[#6A5CFF]/50 hover:text-[#4C46BF] hover:bg-[#F5F3FF] transition-colors duration-200 shadow-sm px-4 py-2.5 sm:py-2 text-sm font-medium flex items-center gap-2 justify-center w-auto self-center"
                style={{ minHeight: "44px" }}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-6 sm:py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center">
          <div className="flex items-center mb-3 flex-wrap justify-center gap-2">
            <span className="text-gray-400 text-xs sm:text-sm mr-1 sm:mr-2">Follow us on</span>
            <a
              href="https://instagram.com/hometro.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-all duration-300 instagram-link"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <defs>
                  <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6A5CFF" />
                    <stop offset="100%" stopColor="#9D5BFF" />
                  </linearGradient>
                </defs>
                <path
                  fill="currentColor"
                  className="instagram-icon-path transition-all duration-300"
                  d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                />
              </svg>
            </a>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 text-center px-2">
            © 2025 Hometro. Find the space in easy way!
          </p>
        </div>
      </footer>
    </div>
  )
}
