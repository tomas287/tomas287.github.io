import { useEffect, useRef } from "react";

function VideoPlayer({ src }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch((e) => {
            // Play might be blocked — that's okay
            console.warn("Play blocked:", e);
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 } // Play/pause when 40% visible
    );

    observer.observe(video);
    return () => observer.unobserve(video);
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      id="novaFCT"
    />
  );
}

export default VideoPlayer;