"use client";
import React, { useEffect } from "react";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, PlayCircle } from "lucide-react";
import { useGetAllVideosQuery } from "@/redux/services/videoApi";
import { VideoResponse } from "@/types/VideoType";
import VideoCard from "./VideoCard";
import {
  SelectContent,
  SelectGroup,
  SelectLabel,
} from "@radix-ui/react-select";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import CardLoading from "../CardLoading";

export default function VideoComponent() {
  const [sortDirection, setSortDirection] = useState("DESC");
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
    setPageNum(0);
    setVideo([]);
    const val = e.target.value;
    setQuery(val);
    if (videosData?.data.totalElements == 0) {
      setVideo([]);
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
      setSortBy("videoTitle");
    } else if (e === "Title Z-A") {
      setSortDirection("DESC");
      setSortBy("videoTitle");
    }
    setPageNum(0);
    setVideo([]);
    console.log(e);
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
  }, [videosData, pageNum, query, sortDirection, sortBy]);

  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12 bg-background flex flex-col gap-10 mx-auto">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-background to-muted/20">
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
            Showing {video.length} of {videosData?.data.totalElements} videos
          </p>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="flex flex-col items-center gap-10 w-full">
        {videosData?.data.totalElements == 0 ? (
          <div className="text-center py-16">
            <PlayCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No videos found
            </h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or filters to find what you're
              looking for.
            </p>
          </div>
        ) : (
          <VideoCard video={video} />
        )}

        {isLoading && <CardLoading />}

        {video.length < (videosData?.data.totalElements || 0) && (
          <Button className="w-fit" onClick={() => setPageNum(pageNum + 1)}>
            Load More
          </Button>
        )}
      </section>
    </div>
  );
}
