import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import VideoPlayer from "../VideoPlayer";
import { Eye } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

export default function VideoCardLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {Array.from({ length: 3 }).map((_, i) => (
        <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-card cursor-pointer h-fit">
          <Skeleton className="h-50 w-full" />
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
              <Skeleton className="h-4 w-full" />
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <CardDescription className="text-xs text-muted-foreground line-clamp-2 mb-3">
              <Skeleton className="h-8 w-full" />
            </CardDescription>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center">
                <Skeleton className="h-4 w-10" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
