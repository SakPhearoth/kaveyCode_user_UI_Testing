export interface Video {
  id: number;
  videoTitle: string;
  description: string;
  youtubeVideoId: string;
  viewCount: number;
  duration: number;
  isPublished: boolean;
  isDeleted: boolean;
//   playlistDetails?: PlaylistDetail[]; // Optional since it's a relationship
}