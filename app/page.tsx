"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  BookOpen,
  Users,
  Globe,
  GraduationCap,
  Heart,
  Maximize2,
  X,
  ChevronUp,
  Menu,
  Facebook,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TeacherPortfolio() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)

  const carouselImages = [
    {
      src: "/images/classroom-selfie.jpg",
      alt: "Teacher Avi with students during earthquake drill practice",
      title: "Dedicated to student engagement and support",
    },
    {
      src: "/images/students-group.jpg",
      alt: "Happy group photo with elementary students",
      title: "Building Connections with Students",
    },
    {
      src: "/images/desk-work.jpg",
      alt: "Teacher Avi working on lesson plans and grading",
      title: "Behind the Scenes - Lesson Planning",
    },
    {
      src: "/images/teaching.jpg",
      alt: "Students practicing earthquake safety procedures",
      title: "Facilitating student learning and development",
    },
    {
      src: "/images/certificate.jpg",
      alt: "Certificate of Participation from Pre-Work Immersion Seminar",
      title: "Professional Development Certificate",
    },
  ]

  const tools = [
    { name: "Google Classroom", icon: "📚", color: "bg-green-100 text-green-700" },
    { name: "Microsoft Teams", icon: "💻", color: "bg-blue-100 text-blue-700" },
    { name: "Canva", icon: "🎨", color: "bg-purple-100 text-purple-700" },
    { name: "Quizlet", icon: "🧠", color: "bg-orange-100 text-orange-700" },
    { name: "Google Meet", icon: "📹", color: "bg-red-100 text-red-700" },
  ]

  const navigationItems = [
    { label: "About", id: "about" },
    { label: "Tools", id: "tools" },
    { label: "Gallery", id: "gallery" },
    { label: "Contact", id: "contact" },
  ]

  useEffect(() => {
    setIsVisible(true)
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [carouselImages.length])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight
      const scrollPercent = scrollTop / (docHeight - winHeight)

      // Show button when user has scrolled down 30% of the page
      setShowScrollTop(scrollPercent > 0.3)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false) // Close mobile menu after navigation
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleGetInTouch = () => {
    setShowContactModal(true)
  }

  const handleFacebookContact = () => {
    window.open("https://www.facebook.com/calindatas28", "_blank")
    setShowContactModal(false)
  }

  const handleGmailContact = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=avigael.calindatas@gmail.com&su=Hello%20Teacher%20Avi!&body=Hi%20Princess%20Avigael,%0A%0AI%20would%20like%20to%20get%20in%20touch%20with%20you.%0A%0ABest%20regards`
    window.open(gmailUrl, "_blank")
    setShowContactModal(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-orange-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-gray-800">Teacher Avi</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-600 hover:text-orange-500 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-orange-100">
              <div className="flex flex-col space-y-3 pt-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-gray-600 hover:text-orange-500 transition-colors py-2 px-2 rounded-lg hover:bg-orange-50"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 w-full">
        <div className="container mx-auto max-w-full">
          <div className="text-center max-w-4xl mx-auto">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-red-100 rounded-full px-4 sm:px-6 py-3 mb-6 sm:mb-8">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mr-2" />
                <span className="text-sm sm:text-lg font-medium text-gray-700">Passionate Elementary Educator</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent block">
                  Princess Avigael
                </span>
                <span className="text-gray-800 block">Calindatas</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-2">
                3rd Year PUP Student pursuing Bachelor of Elementary Education. Dedicated to making learning fun,
                engaging, and accessible for every student. ✨
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4">
                <Button
                  onClick={handleGetInTouch}
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg w-full sm:w-auto"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  className="border-orange-300 text-orange-600 hover:bg-orange-50 px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg bg-transparent w-full sm:w-auto"
                >
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  View Portfolio
                </Button>
              </div>

              {/* Floating Elements - Hidden on mobile to prevent overflow */}
              <div className="relative hidden sm:block">
                <div className="absolute -top-20 left-10 w-16 h-16 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full opacity-20 animate-bounce"></div>
                <div className="absolute -top-10 right-20 w-12 h-12 bg-gradient-to-r from-red-300 to-pink-300 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute top-10 left-1/4 w-8 h-8 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full opacity-20 animate-bounce delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Teacher Avi Section */}
      <section className="py-12 sm:py-16 px-4 bg-white w-full">
        <div className="container mx-auto max-w-full">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Teacher Avi!</h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full opacity-20"></div>
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-red-300 to-pink-300 rounded-full opacity-20"></div>

              <Card className="border-0 shadow-2xl overflow-hidden relative z-10">
                <CardContent className="p-0">
                  <Image
                    src="/images/teaching-poster.jpg"
                    alt="Teacher Avi Introduction Poster"
                    width={800}
                    height={1200}
                    className="w-full h-auto"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 px-4 bg-white/50 w-full">
        <div className="container mx-auto max-w-full">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
            <div>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-red-50">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">My Teaching Philosophy</h3>
                  <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    I believe that every student has the potential to shine like a star. My approach focuses on creating
                    an inclusive, engaging environment where learning becomes an adventure rather than a chore.
                  </p>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-orange-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm sm:text-base">Student-centered learning approach</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm sm:text-base">Interactive and engaging activities</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm sm:text-base">Celebrating every small success</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 mr-3 flex-shrink-0" />
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-800">Education</h4>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">Bachelor of Elementary Education</p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Polytechnic University of the Philippines (3rd Year)
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 mr-3 flex-shrink-0" />
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-800">Languages</h4>
                  </div>
                  <div className="flex gap-2 sm:gap-3 flex-wrap">
                    <span className="bg-orange-100 text-orange-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                      Tagalog
                    </span>
                    <span className="bg-red-100 text-red-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                      English
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Tools Section */}
      <section id="tools" className="py-12 sm:py-16 px-4 w-full">
        <div className="container mx-auto max-w-full">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">Educational Tools</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
              I leverage modern technology to create engaging and interactive learning experiences
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {tools.map((tool, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-4 sm:p-6 text-center">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 ${tool.color} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-lg sm:text-2xl`}
                  >
                    {tool.icon}
                  </div>
                  <h4 className="font-semibold text-gray-800 text-xs sm:text-sm leading-tight">{tool.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery/Carousel Section */}
      <section id="gallery" className="py-12 sm:py-16 px-4 bg-white/50 w-full">
        <div className="container mx-auto max-w-full">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">Gallery</h2>
            <p className="text-gray-600 text-sm sm:text-base">Moments from my teaching journey</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={carouselImages[currentSlide]?.src || "/placeholder.svg"}
                alt={carouselImages[currentSlide]?.alt || `Gallery image ${currentSlide + 1}`}
                fill
                className="object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

              {/* Image Title Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-semibold text-sm sm:text-lg drop-shadow-lg">
                  {carouselImages[currentSlide]?.title}
                </h3>
              </div>

              {/* Fullscreen Icon */}
              <Button
                onClick={() => setSelectedImage(carouselImages[currentSlide]?.src)}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2"
                size="sm"
              >
                <Maximize2 className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>

            <Button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2"
              size="sm"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>

            <Button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2"
              size="sm"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>

            <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                    index === currentSlide ? "bg-orange-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 px-4 w-full">
        <div className="container mx-auto max-w-full">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">Let's Connect</h2>
            <p className="text-gray-600 text-sm sm:text-base">Ready to make learning an adventure together?</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-orange-50 to-red-50">
              <CardContent className="p-6 sm:p-8">
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-800 text-sm sm:text-base">Phone</p>
                        <p className="text-gray-600 text-sm sm:text-base break-all">09695789496</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                        <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-800 text-sm sm:text-base">Email</p>
                        <p className="text-gray-600 text-base sm:text-lg break-all">avigael.calindatas@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-800 text-sm sm:text-base">Location</p>
                        <p className="text-gray-600 text-sm sm:text-base">Philippines</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-lg">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">Ready to Learn?</h4>
                      <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                        Let's embark on an educational journey together!
                      </p>
                      <Button
                        onClick={handleGetInTouch}
                        className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto"
                      >
                        Start Learning
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Options Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4">
            <Button
              onClick={() => setShowContactModal(false)}
              className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 z-10"
              size="sm"
            >
              <X className="w-4 h-4" />
            </Button>

            <div className="p-6 sm:p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Get In Touch</h3>
                <p className="text-gray-600 text-sm sm:text-base">Choose your preferred way to contact Teacher Avi</p>
              </div>

              <div className="space-y-4">
                <Button
                  onClick={handleFacebookContact}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-base font-medium flex items-center justify-center gap-3"
                >
                  <Facebook className="w-5 h-5" />
                  Contact via Facebook
                </Button>

                <Button
                  onClick={handleGmailContact}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-xl text-base font-medium flex items-center justify-center gap-3"
                >
                  <Mail className="w-5 h-5" />
                  Send Email via Gmail
                </Button>
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">Both options will open in a new tab</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <Button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 z-10"
            >
              <X className="w-6 h-6" />
            </Button>
            <div className="relative w-full h-full">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Enlarged view"
                width={1200}
                height={800}
                className="rounded-lg shadow-2xl object-contain w-full h-auto max-h-[80vh]"
              />
            </div>
          </div>
        </div>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 p-4 sm:p-5"
          size="sm"
        >
          <ChevronUp className="w-6 h-6 sm:w-8 sm:h-8" />
        </Button>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 sm:py-8 px-4 w-full">
        <div className="container mx-auto text-center max-w-full">
          <div className="flex items-center justify-center mb-4">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center mr-2">
              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="font-bold text-sm sm:text-base">Teacher Avi</span>
          </div>
          <p className="text-gray-400 mb-4 text-xs sm:text-sm px-4">
            "Shoot for the moon. Even if you miss, you'll land among the stars." - Norman Vincent Peale
          </p>
          <p className="text-xs sm:text-sm text-gray-500">
            © 2025 Princess Avigael Calindatas. Made with ❤️ for education.
          </p>
        </div>
      </footer>
    </div>
  )
}
