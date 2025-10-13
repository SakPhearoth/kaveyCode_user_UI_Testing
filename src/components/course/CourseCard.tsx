"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { CourseResponse } from "@/types/courseType";
import Image from "next/image";

export default function CourseCard({ courses }: { courses: CourseResponse[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {courses.map((course) => (
        <Card
          key={course.id}
          className="group hover:shadow-lg transition-all duration-300 border-border bg-card cursor-pointer h-fit"
        >
          <div className="relative overflow-hidden rounded-t-lg">
            <Image
              src={course.thumbnailUrl || "/placeholder.svg"}
              alt={course.title}
              width={500}
              height={200}
              unoptimized
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <CardHeader className="pb-2">
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge
                key={course.categoryName}
                variant="secondary"
                className="bg-primary/10 text-primary hover:bg-primary/20"
              >
                {course.categoryName}
              </Badge>
            </div>
            <CardTitle className="text-sm text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
              {course.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <CardDescription className="text-xs text-muted-foreground line-clamp-2 mb-3">
              {course.description}
            </CardDescription>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center">
                <Eye className="h-3 w-3 mr-1" />
                {course.viewCount}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
