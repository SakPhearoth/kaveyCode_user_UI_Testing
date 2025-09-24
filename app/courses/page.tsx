"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ThemeToggle } from "@/components/theme-toggle";
import { Code, BookOpen, Users, Star, Search, Filter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { MobileNav } from "@/components/mobile-nav";

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("all");

  const allCourses = [
    {
      id: 1,
      title: "Complete HTML & CSS Fundamentals",
      description:
        "Learn the building blocks of web development with hands-on projects and real-world examples. Master semantic HTML, responsive CSS, and modern layout techniques.",
      tags: ["HTML", "CSS", "Beginner"],
      image: "images/html-css-coding-tutorial.jpg",
      duration: "8 hours",
      students: "2.5k",
      rating: 4.9,
      level: "Beginner",
      topic: "HTML",
    },
    {
      id: 2,
      title: "JavaScript Mastery Course",
      description:
        "Master JavaScript from basics to advanced concepts including ES6+, DOM manipulation, async programming, and modern JavaScript frameworks.",
      tags: ["JavaScript", "ES6", "Intermediate"],
      image: "images/javascript-programming-code.jpg",
      duration: "12 hours",
      students: "1.8k",
      rating: 4.8,
      level: "Intermediate",
      topic: "JavaScript",
    },
    {
      id: 3,
      title: "Python Programming Bootcamp",
      description:
        "Complete Python course covering syntax, data structures, OOP, and popular libraries like NumPy, Pandas, and Django for web development.",
      tags: ["Python", "Data Science", "Beginner"],
      image: "images/python-programming-snake-code.jpg",
      duration: "15 hours",
      students: "3.2k",
      rating: 4.9,
      level: "Beginner",
      topic: "Python",
    },
    {
      id: 4,
      title: "Java Development Essentials",
      description:
        "Learn Java programming with object-oriented principles, data structures, algorithms, and enterprise application development.",
      tags: ["Java", "OOP", "Intermediate"],
      image: "images/java-programming-coffee-cup-code.jpg",
      duration: "18 hours",
      students: "1.5k",
      rating: 4.7,
      level: "Intermediate",
      topic: "Java",
    },
    {
      id: 5,
      title: "C++ Programming Fundamentals",
      description:
        "Master C++ programming with memory management, pointers, system-level programming, and performance optimization techniques.",
      tags: ["C++", "Systems", "Advanced"],
      image: "images/c---programming-code-syntax.jpg",
      duration: "20 hours",
      students: "900",
      rating: 4.8,
      level: "Advanced",
      topic: "C++",
    },
    {
      id: 6,
      title: "Web Development Full Stack",
      description:
        "Complete full-stack development course combining frontend technologies (React, Vue) with backend frameworks (Node.js, Express).",
      tags: ["Full Stack", "React", "Node.js"],
      image: "images/full-stack-web-development.png",
      duration: "25 hours",
      students: "2.1k",
      rating: 4.9,
      level: "Advanced",
      topic: "JavaScript",
    },
    {
      id: 7,
      title: "Advanced CSS & Animations",
      description:
        "Deep dive into advanced CSS techniques including Grid, Flexbox, animations, transitions, and modern CSS frameworks.",
      tags: ["CSS", "Animations", "Advanced"],
      image: "images/advanced-css-animations-code.jpg",
      duration: "10 hours",
      students: "1.2k",
      rating: 4.6,
      level: "Advanced",
      topic: "CSS",
    },
    {
      id: 8,
      title: "Python Data Science & AI",
      description:
        "Learn data science and artificial intelligence with Python, including machine learning, data visualization, and neural networks.",
      tags: ["Python", "AI", "Data Science"],
      image: "images/python-data-science-artificial-intelligence.jpg",
      duration: "22 hours",
      students: "1.8k",
      rating: 4.8,
      level: "Advanced",
      topic: "Python",
    },
    {
      id: 9,
      title: "JavaScript Frameworks Comparison",
      description:
        "Compare and learn popular JavaScript frameworks including React, Vue, Angular, and Svelte with practical projects.",
      tags: ["JavaScript", "React", "Vue", "Angular"],
      image: "images/javascript-frameworks-react-vue-angular.jpg",
      duration: "16 hours",
      students: "1.4k",
      rating: 4.7,
      level: "Intermediate",
      topic: "JavaScript",
    },
    {
      id: 10,
      title: "Java Spring Boot Development",
      description:
        "Build enterprise-grade applications with Java Spring Boot, including REST APIs, database integration, and security.",
      tags: ["Java", "Spring Boot", "Backend"],
      image: "images/java-spring-boot-development.jpg",
      duration: "24 hours",
      students: "1.1k",
      rating: 4.8,
      level: "Advanced",
      topic: "Java",
    },
    {
      id: 11,
      title: "C++ Game Development",
      description:
        "Create games using C++ with popular game engines, covering graphics programming, physics, and game architecture.",
      tags: ["C++", "Game Dev", "Graphics"],
      image: "images/c---game-development-programming.jpg",
      duration: "28 hours",
      students: "750",
      rating: 4.9,
      level: "Advanced",
      topic: "C++",
    },
    {
      id: 12,
      title: "Responsive Web Design Mastery",
      description:
        "Master responsive web design with HTML5, CSS3, mobile-first approach, and progressive web app development.",
      tags: ["HTML", "CSS", "Responsive"],
      image: "images/responsive-web-design-mobile-first.jpg",
      duration: "14 hours",
      students: "2.0k",
      rating: 4.7,
      level: "Intermediate",
      topic: "HTML",
    },
  ];

  const topics = ["all", "HTML", "CSS", "JavaScript", "Python", "Java", "C++"];

  const filteredCourses = useMemo(() => {
    return allCourses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesTopic =
        selectedTopic === "all" || course.topic === selectedTopic;

      return matchesSearch && matchesTopic;
    });
  }, [searchQuery, selectedTopic]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted/20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            មេរៀនទាំងអស់
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            ស្វែងយល់និងរៀនពីវគ្គសិក្សាកូដគ្រប់កម្រិត
            ចាប់ពីមូលដ្ឋានដល់កម្រិតខ្ពស់។
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="ស្វែងរកមេរៀន..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background border-border"
              />
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Filter by:
                </span>
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
              Showing {filteredCourses.length} of {allCourses.length} courses
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

      {/* Courses Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No courses found
              </h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or filters to find what you're
                looking for.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTopic("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
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
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant="secondary"
                        className="bg-background/90 text-foreground"
                      >
                        {course.level}
                      </Badge>
                    </div>
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
                    <CardDescription className="text-muted-foreground line-clamp-3">
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
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      asChild
                    >
                      <Link href={`/courses/${course.id}`}>Start Course</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
