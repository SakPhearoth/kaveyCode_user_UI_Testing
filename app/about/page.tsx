"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { ChevronLeft, ChevronRight, Users, Target, Heart, Globe, BookOpen, Award, Star, Quote } from "lucide-react"

export default function AboutPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sophea Chen",
      role: "Full-Stack Developer at TechCorp",
      image: "/student-success-sophea.jpg",
      story:
        "Started with zero coding knowledge. Now I'm building web applications professionally and mentoring other students.",
      achievement: "Landed first developer job in 6 months",
    },
    {
      name: "David Rodriguez",
      role: "Frontend Developer at StartupXYZ",
      image: "/student-success-david.jpg",
      story:
        "The free courses helped me transition from retail to tech. The community support was incredible throughout my journey.",
      achievement: "Career change success story",
    },
    {
      name: "Aisha Patel",
      role: "Software Engineer at Google",
      image: "/student-success-aisha.jpg",
      story:
        "These courses gave me the foundation I needed to excel in computer science. Now I'm working at my dream company.",
      achievement: "Big Tech placement",
    },
  ]

  const teamMembers = [
    {
      name: "Dr. Sarah Kim",
      role: "Founder & Lead Educator",
      image: "/team-sarah-kim.jpg",
      bio: "Former Google engineer with 10+ years experience. Passionate about making coding education accessible to everyone.",
    },
    {
      name: "Michael Chen",
      role: "Curriculum Director",
      image: "/team-michael-chen.jpg",
      bio: "Ex-Microsoft developer who believes in hands-on learning. Designs our practical, project-based curriculum.",
    },
    {
      name: "Priya Sharma",
      role: "Community Manager",
      image: "/team-priya-sharma.jpg",
      bio: "Dedicated to building supportive learning communities. Ensures every student feels welcomed and supported.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl text-foreground">CodeLearn</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/courses" className="text-muted-foreground hover:text-foreground transition-colors">
                Courses
              </Link>
              <Link href="/videos" className="text-muted-foreground hover:text-foreground transition-colors">
                Videos
              </Link>
              <Link href="/about" className="font-medium text-foreground">
                About
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <Button asChild>
                <Link href="/courses">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Empowering the Next Generation of Coders
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            We believe coding education should be free, accessible, and available to everyone. Our mission is to break
            down barriers and create opportunities for students worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" />
              <span>50+ Countries Served</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span>100,000+ Students</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" />
              <span>95% Success Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We started CodeLearn with a simple belief: everyone deserves access to quality coding education,
                regardless of their background or financial situation. In Cambodia and around the world, we've seen
                talented individuals held back by lack of resources.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our platform provides comprehensive, hands-on coding courses that prepare students for real-world
                development careers. We focus on practical skills, project-based learning, and building a supportive
                community where everyone can thrive.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-card rounded-lg">
                  <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-foreground">Accessible</h3>
                  <p className="text-sm text-muted-foreground">Free for everyone</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-foreground">Supportive</h3>
                  <p className="text-sm text-muted-foreground">Community-driven</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/mission-coding-education.jpg"
                alt="Students learning to code together"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our passionate educators and developers are committed to creating the best learning experience for our
              students.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Student Success Stories</h2>
            <p className="text-muted-foreground leading-relaxed">
              Real stories from students who transformed their careers through our platform.
            </p>
          </div>

          <div className="relative">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <img
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      className="w-32 h-32 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <Quote className="h-8 w-8 text-primary mb-4 mx-auto md:mx-0" />
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      "{testimonials[currentTestimonial].story}"
                    </p>
                    <div className="mb-4">
                      <h3 className="font-semibold text-foreground text-lg">{testimonials[currentTestimonial].name}</h3>
                      <p className="text-primary font-medium">{testimonials[currentTestimonial].role}</p>
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      <Star className="h-3 w-3 mr-1" />
                      {testimonials[currentTestimonial].achievement}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button variant="outline" size="sm" onClick={prevTestimonial} className="rounded-full bg-transparent">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
              <Button variant="outline" size="sm" onClick={nextTestimonial} className="rounded-full bg-transparent">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Coding Journey?</h2>
          <p className="text-xl mb-8 opacity-90 text-pretty">
            Join thousands of students who have transformed their careers with our free courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link href="/courses">Browse Courses</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/videos">Watch Videos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
                <span className="font-bold text-xl text-foreground">CodeLearn</span>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Free coding education for everyone. Learn HTML, CSS, JavaScript, Python, Java, C++, and more with our
                comprehensive courses and video tutorials.
              </p>
              <p className="text-sm text-muted-foreground">© 2025 CodeLearn. Made with ❤️ for students worldwide.</p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="hover:text-foreground transition-colors">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="/videos" className="hover:text-foreground transition-colors">
                    Videos
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="hover:text-foreground transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="hover:text-foreground transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="/feedback" className="hover:text-foreground transition-colors">
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
