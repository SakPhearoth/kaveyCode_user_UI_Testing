"use client";
import React, { useEffect } from "react";
import { useState, useMemo } from "react";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { Input } from "@/src/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import {
  Code,
  PlayCircle,
  Clock,
  Search,
  Filter,
  Eye,
  ThumbsUp,
} from "lucide-react";
import { useGetAllVideosQuery } from "@/src/redux/services/videoApi";
import { VideoResponse } from "@/src/types/VideoType";
import { useRouter, useSearchParams } from "next/navigation";

export default function VideoComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("all");

  const [video, setVideo] = useState<VideoResponse[]>([]);
  const [pageNum, setPageNum] = useState(0);
  const searchParam = useSearchParams();
  const search = searchParam.get("title") || "";
  const [query, setQuery] = useState("");
  const { data: videosData, isLoading } = useGetAllVideosQuery({
    pageNum: pageNum,
    title: search,
  });

  function formatDurationClock(isoDuration: string) {
    const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);

    if (!match) return "00:00";

    const hours = parseInt(match[1]);
    const minutes = parseInt(match[2]);
    const seconds = parseInt(match[3]);

    const pad = (n: number) => String(n).padStart(2, "0");

    if (hours > 0) {
      return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }
    return `${pad(minutes)}:${pad(seconds)}`;
  }

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    router.push(`/videos?title=${encodeURIComponent(val)}`);
  };

  useEffect(() => {
    const videos = (videosData?.data.content as VideoResponse[]) || [];
    setVideo(video.concat(videos));
    if (query != "") {
      setPageNum(0);
      setVideo(videos);
      if(query == ""){
        setVideo([])
        console.log("IN")
      }
    }
    console.log("data:", videos);
  }, [videosData, pageNum, search, searchParam]);

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
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="ស្វែងរកវីដេអូ..."
                value={query}
                onChange={handleChange}
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
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {video.map((video) => (
              <Card
                key={video.id}
                className="group hover:shadow-lg transition-all duration-300 border-border bg-card cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={`https://i.ytimg.com/vi/${video.youtubeVideoId}/mqdefault.jpg`}
                    alt={video.videoTitle}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-primary/90 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                      <PlayCircle className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
                    {formatDurationClock(video.duration)}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {video.videoTitle}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-xs text-muted-foreground line-clamp-2 mb-3">
                    {video.description}
                  </CardDescription>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      {video.viewCount}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button className="w-fit" onClick={() => setPageNum(pageNum + 1)}>
            Load More
          </Button>
        </div>
      </section>
    </div>
  );
}
