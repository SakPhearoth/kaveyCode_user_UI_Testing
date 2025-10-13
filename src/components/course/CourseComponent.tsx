"use client";
import React, { useEffect } from "react";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CourseCard from "./CourseCard";
import {
  useGetAllCategoriesQuery,
  useGetAllCoursesQuery,
} from "@/redux/services/courseApi";
import { CourseResponse } from "@/types/courseType";
import { BookOpen, Filter, PlayCircle, Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import CardLoading from "../CardLoading";
import { CategoryResponse } from "@/types/categoryType";

export default function CourseComponent() {
  const [sortDirection, setSortDirection] = useState("DESC");
  const [sortBy, setSortBy] = useState("viewCount");
  const shortOption = ["Most View", "Less View", "Title A-Z", "Title Z-A"];
  const [pageNum, setPageNum] = useState(0);
  const [courses, setCourses] = useState<CourseResponse[]>([]);
  const [query, setQuery] = useState("");

  const { data: categoriesResponse } = useGetAllCategoriesQuery();
  const categoriesData = (categoriesResponse?.data as CategoryResponse[]) || [];
  const [selectCategory, setSelectCategory] = useState("Show All");

  const { data: coursesResponse, isLoading } = useGetAllCoursesQuery({
    pageNum: pageNum,
    title: query,
    direction: sortDirection,
    sortBy: sortBy,
    categoryName: selectCategory,
  });
  const coursesData = (coursesResponse?.data.content as CourseResponse[]) || [];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageNum(0);
    setCourses([]);
    const val = e.target.value;
    setQuery(val);
    if (coursesResponse?.data.totalElements == 0) {
      setCourses([]);
    }
  };

  const handleSort = (e: string) => {
    if (e === "Most View") {
      setSortDirection("DESC");
      setSortBy("viewCount");
    } else if (e === "Less View") {
      setSortDirection("ASC");
      setSortBy("viewCount");
    } else if (e === "Title A-Z") {
      setSortDirection("ASC");
      setSortBy("title");
    } else if (e === "Title Z-A") {
      setSortDirection("DESC");
      setSortBy("title");
    }
    setPageNum(0);
    setCourses([]);
  };

  const handleFilter = (e: string) => {
    setPageNum(0);
    setCourses([]);
    setSelectCategory(e)
  }

  useEffect(() => {
    setCourses((prev) => {
      const combined = [...prev, ...coursesData];
      const unique = combined.filter(
        (v, i, self) => i === self.findIndex((t) => t.id === v.id)
      );
      return unique;
    });
  }, [coursesResponse, pageNum, query, sortDirection, sortBy, selectCategory]);

  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12 bg-background flex flex-col gap-10 mx-auto">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-background to-muted/20">
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
      <section className="border-b border-border pb-10">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center bg-background border-border w-fit">
            <InputGroup>
              <InputGroupInput
                placeholder="ស្វែងរកវីដេអូ..."
                value={query}
                onChange={handleChange}
              />
              <InputGroupAddon>
                <Search className="h-4 w-4 text-muted-foreground" />
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <Select onValueChange={(e) => handleSort(e)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={"Most View"} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {shortOption.map((topic) => (
                    <SelectItem key={topic} value={topic}>
                      {topic}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {courses.length} of {coursesResponse?.data.totalElements}{" "}
            videos
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Filter by:</span>
            <Select onValueChange={(e) => handleFilter(e)}>
              <SelectTrigger className="w-[220px]">
                <SelectValue placeholder={"Show All"} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup defaultValue={"Show All"}>
                  {categoriesData.map((category) => (
                    <SelectItem key={category.id} value={category.name}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="flex flex-col items-center gap-10 w-full">
        {coursesResponse?.data.totalElements == 0 ? (
          <div className="text-center py-16">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No courses found
            </h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or filters to find what you're
              looking for.
            </p>
          </div>
        ) : (
          <CourseCard courses={courses} />
        )}

        {isLoading && <CardLoading />}

        {courses.length < (coursesResponse?.data.totalElements || 0) && (
          <Button className="w-fit" onClick={() => setPageNum(pageNum + 1)}>
            Load More
          </Button>
        )}
      </section>
    </div>
  );
}
