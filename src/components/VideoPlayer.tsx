'use client';

import { useEffect, useRef } from 'react';

interface VideoPlayerProps {
  src: string; // YouTube URL or mp4 file
  type?: 'youtube' | 'vimeo' | 'html5';
}

export default function VideoPlayer({ src, type = 'youtube' }: VideoPlayerProps) {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let player: any;
    // Dynamically import Plyr only on client
    import('plyr').then((PlyrModule) => {
      if (videoRef.current) {
        player = new PlyrModule.default(videoRef.current, {
          ratio: '16:9',
          controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
        });
      }
    });

    return () => {
      if (player) player.destroy();
    };
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
