"use client";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { ThemeToggle } from "@/src/components/theme-toggle";
import { MobileNav } from "@/src/components/mobile-nav";
import { PlayCircle, Code, BookOpen, Users, Star, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export default function HomePage() {
  const featuredCourses = [
    {
      id: 1,
      title: "Complete HTML & CSS Fundamentals",
      description:
        "Learn the building blocks of web development with hands-on projects and real-world examples.",
      tags: ["HTML", "CSS", "Beginner"],
      image: "images/html-css-coding-tutorial.jpg",
      duration: "8 hours",
      students: "2.5k",
      rating: 4.9,
    },
    {
      id: 2,
      title: "JavaScript Mastery Course",
      description:
        "Master JavaScript from basics to advanced concepts including ES6+, DOM manipulation, and async programming.",
      tags: ["JavaScript", "ES6", "Intermediate"],
      image: "images/javascript-programming-code.jpg",
      duration: "12 hours",
      students: "1.8k",
      rating: 4.8,
    },
    {
      id: 3,
      title: "Python Programming Bootcamp",
      description:
        "Complete Python course covering syntax, data structures, OOP, and popular libraries like NumPy and Pandas.",
      tags: ["Python", "Data Science", "Beginner"],
      image: "images/python-programming-snake-code.jpg",
      duration: "15 hours",
      students: "3.2k",
      rating: 4.9,
    },
    {
      id: 4,
      title: "Java Development Essentials",
      description:
        "Learn Java programming with object-oriented principles, data structures, and application development.",
      tags: ["Java", "OOP", "Intermediate"],
      image: "images/java-programming-coffee-cup-code.jpg",
      duration: "18 hours",
      students: "1.5k",
      rating: 4.7,
    },
    {
      id: 5,
      title: "C++ Programming Fundamentals",
      description:
        "Master C++ programming with memory management, pointers, and system-level programming concepts.",
      tags: ["C++", "Systems", "Advanced"],
      image: "images/c---programming-code-syntax.jpg",
      duration: "20 hours",
      students: "900",
      rating: 4.8,
    },
    {
      id: 6,
      title: "Web Development Full Stack",
      description:
        "Complete full-stack development course combining frontend and backend technologies.",
      tags: ["Full Stack", "React", "Node.js"],
      image: "images/full-stack-web-development.png",
      duration: "25 hours",
      students: "2.1k",
      rating: 4.9,
    },
  ];

  const featuredVideos = [
    {
      id: 1,
      title: "HTML in 30 Minutes - Complete Beginner Tutorial",
      description: "Quick start guide to HTML with practical examples",
      thumbnail: "images/html-tutorial-video-thumbnail.jpg",
      duration: "30:45",
      views: "125k",
    },
    {
      id: 2,
      title: "CSS Flexbox Explained - Visual Guide",
      description: "Master CSS Flexbox with visual examples and real projects",
      thumbnail: "images/css-flexbox-tutorial-video.jpg",
      duration: "45:20",
      views: "89k",
    },
    {
      id: 3,
      title: "JavaScript Functions Deep Dive",
      description: "Everything you need to know about JavaScript functions",
      thumbnail: "images/javascript-functions-tutorial.jpg",
      duration: "52:15",
      views: "156k",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: copy */}
            <div className="lg:col-span-6 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 leading-tight">
                សូមស្វាគមន៍មកកាន់{" "}
                <span className="text-primary">Kavey Code</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                វគ្គសិក្សារបស់ Kavey Code ត្រូវបានរចនាឡើងដើម្បីអោយអ្នករៀន Coding
                បានយ៉ាងងាយស្រួល និងឥតគិតថ្លៃ។ រៀនពី HTML, CSS, JavaScript និង
                Frameworks ដូចជា React និង Next.js តាមជំហានៗ ជាមួយគំរូក៏ដូចជា
                Project ជាក់ស្តែង។
              </p>

             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/95 text-primary-foreground px-6 sm:px-8 py-3 text-base sm:text-lg transform transition-all duration-200 hover:-translate-y-0.5 active:scale-95 w-full sm:w-auto"
                    aria-label="Start learning now"
                  >
                    <BookOpen className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    ចាប់ផ្ដើមរៀនឥឡូវនេះ
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto"
                    aria-label="Watch intro video"
                  >
                    <PlayCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    មើលវីដេអូណែនាំ
                  </Button>
                </div>
              </div>

              {/* <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start opacity-90">
                <span className="text-xs text-muted-foreground">Popular:</span>
                <span className="px-2 py-1 bg-card/60 rounded-md text-sm text-foreground">
                  HTML
                </span>
                <span className="px-2 py-1 bg-card/60 rounded-md text-sm text-foreground">
                  CSS
                </span>
                <span className="px-2 py-1 bg-card/60 rounded-md text-sm text-foreground">
                  JavaScript
                </span>
                <span className="px-2 py-1 bg-card/60 rounded-md text-sm text-foreground">
                  React
                </span>
              </div> */}
            </div>

            {/* Right: hero visuals */}
            <div className="lg:col-span-6 flex items-center justify-center relative">
              {/* animated gradient blob behind images */}
              <div
                aria-hidden
                className="absolute -right-8 top-0 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-primary/15 via-primary/7 to-transparent blur-3xl animate-blob opacity-90 pointer-events-none"
              />

              {/* main banner image */}
              <div className="relative w-[360px] sm:w-[420px] lg:w-[480px]">
                <div className="rounded-xl overflow-hidden transform-gpu transition-transform duration-500 hover:scale-102">
                  <Image
                    src="images/coding-homepage.png"
                    alt="Kavey Code banner"
                    width={960}
                    height={540}
                    className="w-full h-auto object-cover block"
                    priority
                  />
                </div>

                {/* floating tech icons */}
                <div className="absolute inset-0 pointer-events-none">
                  <img
                    src="images/icons-html.png"
                    alt=""
                    className="absolute w-12 h-12 top-4 left-2 shadow-md rounded-md animate-float-1"
                    aria-hidden
                  />
                  <img
                    src="images/icons-css.png"
                    alt=""
                    className="absolute w-12 h-12 top-10 right-6 shadow-md rounded-md animate-float-2"
                    aria-hidden
                  />
                  <img
                    src="images/icons-javascrip.png"
                    alt=""
                    className="absolute w-14 h-14 bottom-12 left-8 shadow-lg rounded-md animate-float-3"
                    aria-hidden
                  />
                  <img
                    src="images/icons-react.png"
                    alt=""
                    className="absolute w-12 h-12 -bottom-6 right-12 shadow-md rounded-md animate-float-1"
                    aria-hidden
                  />
                  <img
                    src="images/icons-next.js.png"
                    alt=""
                    className="absolute w-10 h-10 top-3 right-20 shadow-md rounded-md animate-float-2"
                    aria-hidden
                  />
                  <img
                    src="images/icons-tailwind-css.png"
                    alt=""
                    className="absolute w-10 h-10 left-1/2 -translate-x-1/2 top-0 shadow-md rounded-md animate-float-3"
                    aria-hidden
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* subtle bottom wave / divider */}
        <svg
          className="absolute inset-x-0 bottom-0 w-full -mb-1"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0,40 C240,120 480,0 720,40 C960,80 1200,20 1440,60 L1440 120 L0 120 Z"
            fill="rgba(99,102,241,0.04)"
          />
        </svg>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              មេរៀនដែលពេញនិយម
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              ចាប់ផ្តើមការសិក្សាកូដរបស់អ្នកជាមួយមេរៀនដែលពេញនិយមរបស់យើង
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <Card
                key={course.id}
                className="group hover:shadow-lg transition-all duration-300 border-border bg-card"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-foreground">
                    {course.duration}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {course.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students} students
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                      {course.rating}
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Start Course
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-auto bg-transparent"
            >
              <Link href="/courses">ចូលមើលមេរៀនទាំងអស់</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Video Tutorials Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              វីដេអូមេរៀនដែលពេញនិយម
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              វីដេអូមេរៀនដែលមានភាពទាក់ទាញនិងងាយស្រួលយល់សម្រាប់អ្នក
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVideos.map((video) => (
              <Card
                key={video.id}
                className="group hover:shadow-lg transition-all duration-300 border-border bg-card"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={video.thumbnail || "images/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-primary/90 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <PlayCircle className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-card-foreground group-hover:text-primary transition-colors">
                    {video.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {video.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {video.duration}
                    </div>
                    <div>{video.views} views</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-auto bg-transparent"
            >
              <Link href="/videos">ចូលមើលវីដេអូមេរៀនទាំងអស់</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            ចង់ទទួលព័ត៌មានថ្មីៗពីគេហទំព័រកវីកូដ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            សូមធ្វើការចុះឈ្មោះដើម្បីទទួលបានព័ត៌មាននិងវគ្គមេរៀនថ្មីៗពីកាវីកូដ។
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6"
              asChild
            >
              <Link href="/register">ចុះឈ្មោះ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
