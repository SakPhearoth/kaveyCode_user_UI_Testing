"use client";
import React, { useEffect } from "react";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import { useGetAllVideosQuery } from "@/redux/services/videoApi";
import { VideoResponse } from "@/types/VideoType";
import { useRouter, useSearchParams } from "next/navigation";
import VideoCard from "./VideoCard";
import { SelectContent } from "@radix-ui/react-select";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";

export default function VideoComponent() {
  const [selectedTopic, setSelectedTopic] = useState("all");

  const [sortDirection, setSortDirection] = useState("ASC");
  const [sortBy, setSortBy] = useState("viewCount");
  const shortOption = ["Most View", "Less View", "Title A-Z", "Title Z-A"];

  const [video, setVideo] = useState<VideoResponse[]>([]);
  const [pageNum, setPageNum] = useState(0);
  const [query, setQuery] = useState("");
  const { data: videosData, isLoading } = useGetAllVideosQuery({
    pageNum: pageNum,
    title: query,
    direction: sortDirection,
    sortBy: sortBy,
  });

  const videos = (videosData?.data.content as VideoResponse[]) || [];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    setPageNum(0);
    setVideo([]);
  };

  useEffect(() => {
    setVideo((prev) => {
      const combined = [...prev, ...videos];
      const unique = combined.filter(
        (v, i, self) => i === self.findIndex((t) => t.id === v.id)
      );
      return unique;
    });

    console.log("data:", videos);
  }, [videosData, pageNum, query]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted/20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            វីដេអូមេរៀន
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            {/* រៀនកម្មវិធីតាមរយៈវីដេអូមានការចូលរួម និងងាយយល់។ */}
            រៀនតាមរយៈវីដេអូដើម្បីភាពងាយស្រួល និងយល់បន្ថែមួយកម្រិតទៀត។
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center bg-background border-border w-fit">
              <InputGroup>
                <InputGroupInput
                  placeholder="ស្វែងរកវីដេអូ..."
                  value={query}
                  onChange={handleChange}
                />
                <InputGroupAddon>
                  <Search className="h-4 w-4 text-muted-foreground"/>
                </InputGroupAddon>
                <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
              </InputGroup>
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Sort by:</span>
              </div>
              <Select onValueChange={setSelectedTopic}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Sort" />
                </SelectTrigger>
                <SelectContent>
                  {shortOption.map((topic) => (
                    <SelectItem key={topic} value={topic}>
                      {topic}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {video.length} of {videosData?.data.totalElements} videos
            </p>
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-10 w-full">
        <VideoCard video={video} />
        {video.length != videosData?.data.totalElements && (
          <Button className="w-fit" onClick={() => setPageNum(pageNum + 1)}>
            Load More
          </Button>
        )}
      </section>
    </div>
  );
}
