import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Eye, PlayCircle } from "lucide-react";
import { Button } from "../ui/button";
import { VideoResponse } from "@/types/VideoType";
import Image from "next/image";
import VideoPlayer from "../VideoPlayer";

export default function VideoCard({ video }: { video: VideoResponse[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-25">
      {video.map((video) => (
        <Card
          key={video.id}
          className="group hover:shadow-lg transition-all duration-300 border-border bg-card cursor-pointer h-fit"
        >
          <VideoPlayer
            src={`https://www.youtube.com/embed/${video.youtubeVideoId}?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`}
            type="youtube"
          />
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
  );
}

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
