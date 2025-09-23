'use client';

import { useEffect, useRef } from 'react';
import Plyr from 'plyr';

interface VideoPlayerProps {
  src: string; // YouTube URL or mp4 file
  type?: 'youtube' | 'vimeo' | 'html5';
}

export default function VideoPlayer({ src, type = 'youtube' }: VideoPlayerProps) {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Initialize Plyr
      const player = new Plyr(videoRef.current, {
        ratio: '16:9',
        // Customize controls here:
        controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
      });

      return () => {
        player.destroy();
      };
    }
  }, []);

  return (
    <div className="plyr__video-embed" ref={videoRef}>
      {type === 'youtube' || type === 'vimeo' ? (
        <iframe
          src={src}
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      ) : (
        <video playsInline controls>
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
