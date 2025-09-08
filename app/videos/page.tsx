"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ThemeToggle } from "@/components/theme-toggle"
import { Code, PlayCircle, Clock, Search, Filter, Eye, ThumbsUp } from "lucide-react"
import Link from "next/link"

export default function VideosPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTopic, setSelectedTopic] = useState("all")
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)

  const allVideos = [
    {
      id: 1,
      title: "HTML in 30 Minutes - Complete Beginner Tutorial",
      description: "Quick start guide to HTML with practical examples and hands-on coding exercises.",
      thumbnail: "/html-tutorial-video-thumbnail.jpg",
      duration: "30:45",
      views: "125k",
      likes: "4.2k",
      topic: "HTML",
      level: "Beginner",
      tags: ["HTML", "Beginner", "Web Development"],
      embedId: "UB1O30fR-EE", // Example YouTube video ID
      uploadDate: "2024-12-15",
    },
    {
      id: 2,
      title: "CSS Flexbox Explained - Visual Guide",
      description: "Master CSS Flexbox with visual examples and real projects that you can follow along.",
      thumbnail: "/css-flexbox-tutorial-video.jpg",
      duration: "45:20",
      views: "89k",
      likes: "3.1k",
      topic: "CSS",
      level: "Intermediate",
      tags: ["CSS", "Flexbox", "Layout"],
      embedId: "JJSoEo8JSnc",
      uploadDate: "2024-12-10",
    },
    {
      id: 3,
      title: "JavaScript Functions Deep Dive",
      description: "Everything you need to know about JavaScript functions, from basics to advanced concepts.",
      thumbnail: "/javascript-functions-tutorial.jpg",
      duration: "52:15",
      views: "156k",
      likes: "5.8k",
      topic: "JavaScript",
      level: "Intermediate",
      tags: ["JavaScript", "Functions", "Programming"],
      embedId: "N8ap4k_1QEQ",
      uploadDate: "2024-12-08",
    },
    {
      id: 4,
      title: "Python Variables and Data Types",
      description: "Learn Python fundamentals including variables, data types, and basic operations.",
      thumbnail: "/python-variables-data-types-tutorial.jpg",
      duration: "38:30",
      views: "203k",
      likes: "7.2k",
      topic: "Python",
      level: "Beginner",
      tags: ["Python", "Variables", "Data Types"],
      embedId: "rfscVS0vtbw",
      uploadDate: "2024-12-05",
    },
    {
      id: 5,
      title: "Java Object-Oriented Programming",
      description: "Master OOP concepts in Java with classes, objects, inheritance, and polymorphism.",
      thumbnail: "/java-oop-programming-tutorial.jpg",
      duration: "1:15:45",
      views: "94k",
      likes: "3.5k",
      topic: "Java",
      level: "Intermediate",
      tags: ["Java", "OOP", "Classes"],
      embedId: "Wok4Xw_25xY",
      uploadDate: "2024-12-03",
    },
    {
      id: 6,
      title: "C++ Pointers and Memory Management",
      description: "Deep dive into C++ pointers, memory allocation, and best practices for memory management.",
      thumbnail: "/c---pointers-memory-management.jpg",
      duration: "1:02:20",
      views: "67k",
      likes: "2.8k",
      topic: "C++",
      level: "Advanced",
      tags: ["C++", "Pointers", "Memory"],
      embedId: "zuegQmMdy8M",
      uploadDate: "2024-12-01",
    },
    {
      id: 7,
      title: "Responsive Web Design with CSS Grid",
      description: "Create responsive layouts using CSS Grid with practical examples and modern techniques.",
      thumbnail: "/css-grid-responsive-design.jpg",
      duration: "41:15",
      views: "112k",
      likes: "4.6k",
      topic: "CSS",
      level: "Intermediate",
      tags: ["CSS", "Grid", "Responsive"],
      embedId: "jV8B24rSN5o",
      uploadDate: "2024-11-28",
    },
    {
      id: 8,
      title: "JavaScript ES6+ Features Explained",
      description: "Modern JavaScript features including arrow functions, destructuring, and async/await.",
      thumbnail: "/javascript-es6-modern-features.jpg",
      duration: "58:40",
      views: "178k",
      likes: "6.9k",
      topic: "JavaScript",
      level: "Advanced",
      tags: ["JavaScript", "ES6", "Modern"],
      embedId: "NCwa_xi0Uuc",
      uploadDate: "2024-11-25",
    },
    {
      id: 9,
      title: "Python Web Development with Django",
      description: "Build web applications with Python Django framework from scratch to deployment.",
      thumbnail: "/python-django-web-development.jpg",
      duration: "1:28:30",
      views: "145k",
      likes: "5.4k",
      topic: "Python",
      level: "Advanced",
      tags: ["Python", "Django", "Web Development"],
      embedId: "F5mRW0jo-U4",
      uploadDate: "2024-11-22",
    },
    {
      id: 10,
      title: "Java Spring Boot REST API",
      description: "Create RESTful APIs with Java Spring Boot including database integration and testing.",
      thumbnail: "/java-spring-boot-rest-api.jpg",
      duration: "1:12:15",
      views: "87k",
      likes: "3.2k",
      topic: "Java",
      level: "Advanced",
      tags: ["Java", "Spring Boot", "REST API"],
      embedId: "8SGI_XS5OPw",
      uploadDate: "2024-11-20",
    },
    {
      id: 11,
      title: "HTML5 Semantic Elements Guide",
      description: "Learn HTML5 semantic elements for better accessibility and SEO optimization.",
      thumbnail: "/html5-semantic-elements-guide.jpg",
      duration: "25:50",
      views: "98k",
      likes: "3.8k",
      topic: "HTML",
      level: "Beginner",
      tags: ["HTML5", "Semantic", "Accessibility"],
      embedId: "kGW8Al_cga4",
      uploadDate: "2024-11-18",
    },
    {
      id: 12,
      title: "C++ STL Containers and Algorithms",
      description: "Master C++ Standard Template Library with containers, iterators, and algorithms.",
      thumbnail: "/c---stl-containers-algorithms.jpg",
      duration: "1:05:35",
      views: "52k",
      likes: "2.1k",
      topic: "C++",
      level: "Advanced",
      tags: ["C++", "STL", "Algorithms"],
      embedId: "Aa2iFAUlVao",
      uploadDate: "2024-11-15",
    },
  ]

  const topics = ["all", "HTML", "CSS", "JavaScript", "Python", "Java", "C++"]

  const filteredVideos = useMemo(() => {
    return allVideos.filter((video) => {
      const matchesSearch =
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesTopic = selectedTopic === "all" || video.topic === selectedTopic

      return matchesSearch && matchesTopic
    })
  }, [searchQuery, selectedTopic])

  const featuredVideo = selectedVideo ? allVideos.find((v) => v.id === selectedVideo) : allVideos[0]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">CodeLearn</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/courses" className="text-muted-foreground hover:text-primary transition-colors">
                Courses
              </Link>
              <Link href="/videos" className="text-foreground hover:text-primary transition-colors font-medium">
                Videos
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted/20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Video <span className="text-primary">Tutorials</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Learn programming through engaging video tutorials. Watch, practice, and master coding concepts with our
            comprehensive video library.
          </p>
        </div>
      </section>

      {/* Featured Video Player */}
      {featuredVideo && (
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-card rounded-xl shadow-lg overflow-hidden border border-border">
              <div className="aspect-video bg-black rounded-t-xl overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${featuredVideo.embedId}`}
                  title={featuredVideo.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {featuredVideo.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h2 className="text-2xl font-bold text-card-foreground mb-2">{featuredVideo.title}</h2>
                <p className="text-muted-foreground mb-4">{featuredVideo.description}</p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {featuredVideo.views} views
                  </div>
                  <div className="flex items-center">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    {featuredVideo.likes} likes
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredVideo.duration}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search videos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background border-border"
              />
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Filter by:</span>
              </div>
              <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                <SelectTrigger className="w-40 bg-background border-border">
                  <SelectValue placeholder="All Topics" />
                </SelectTrigger>
                <SelectContent>
                  {topics.map((topic) => (
                    <SelectItem key={topic} value={topic}>
                      {topic === "all" ? "All Topics" : topic}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {filteredVideos.length} of {allVideos.length} videos
            </p>
            <div className="flex flex-wrap gap-2">
              {topics.slice(1).map((topic) => (
                <Button
                  key={topic}
                  variant={selectedTopic === topic ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTopic(topic)}
                  className="text-xs"
                >
                  {topic}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredVideos.length === 0 ? (
            <div className="text-center py-16">
              <PlayCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No videos found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedTopic("all")
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredVideos.map((video) => (
                <Card
                  key={video.id}
                  className="group hover:shadow-lg transition-all duration-300 border-border bg-card cursor-pointer"
                  onClick={() => setSelectedVideo(video.id)}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                      <div className="bg-primary/90 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                        <PlayCircle className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
                      {video.duration}
                    </div>
                    <div className="absolute top-2 left-2">
                      <Badge variant="secondary" className="bg-background/90 text-foreground text-xs">
                        {video.level}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {video.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-sm text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {video.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-xs text-muted-foreground line-clamp-2 mb-3">
                      {video.description}
                    </CardDescription>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {video.views}
                      </div>
                      <div className="flex items-center">
                        <ThumbsUp className="h-3 w-3 mr-1" />
                        {video.likes}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Want More Structured Learning?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Check out our comprehensive courses that combine videos with hands-on exercises and projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link href="/courses">
                <PlayCircle className="mr-2 h-5 w-5" />
                Browse Courses
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              Subscribe for Updates
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Code className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold text-card-foreground">CodeLearn</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Empowering Khmer and global students with free, high-quality coding education. Learn at your own pace
                and build the skills for tomorrow.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  Facebook
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  YouTube
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  GitHub
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-card-foreground mb-4">Courses</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/courses/html-css" className="hover:text-primary transition-colors">
                    HTML & CSS
                  </Link>
                </li>
                <li>
                  <Link href="/courses/javascript" className="hover:text-primary transition-colors">
                    JavaScript
                  </Link>
                </li>
                <li>
                  <Link href="/courses/python" className="hover:text-primary transition-colors">
                    Python
                  </Link>
                </li>
                <li>
                  <Link href="/courses/java" className="hover:text-primary transition-colors">
                    Java
                  </Link>
                </li>
                <li>
                  <Link href="/courses/cpp" className="hover:text-primary transition-colors">
                    C++
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-card-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/help" className="hover:text-primary transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="hover:text-primary transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/feedback" className="hover:text-primary transition-colors">
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 CodeLearn. All rights reserved. Made with ❤️ for students worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
