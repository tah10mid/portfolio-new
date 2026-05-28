import { useState, useEffect, useRef } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

// Replace this with your YouTube video ID (the part after "v=" in the URL)
// Example: For https://www.youtube.com/watch?v=dQw4w9WgXcQ → "dQw4w9WgXcQ"
const YOUTUBE_VIDEO_ID = "G0SwCXuKb5s";

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const playerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    const initPlayer = () => {
      if (!containerRef.current) return;
      playerRef.current = new window.YT.Player(containerRef.current, {
        height: "0",
        width: "0",
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          autoplay: 0,
          loop: 1,
          playlist: YOUTUBE_VIDEO_ID,
          controls: 0,
          disablekb: 1,
          modestbranding: 1,
        },
        events: {
          onReady: (e) => {
            e.target.setVolume(35);
            setReady(true);
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (playerRef.current?.destroy) {
        try { playerRef.current.destroy(); } catch { /* ignore */ }
      }
    };
  }, []);

  const toggle = () => {
    const p = playerRef.current;
    if (!p || !ready) return;
    if (playing) {
      p.pauseVideo();
    } else {
      p.playVideo();
    }
    setPlaying(!playing);
  };

  return (
    <>
      <div className="music-player__hidden">
        <div ref={containerRef} />
      </div>
      <button
        className={`music-toggle ${playing ? "music-toggle--playing" : ""}`}
        onClick={toggle}
        aria-label={playing ? "Mute background music" : "Play background music"}
        title={playing ? "Mute music" : "Play music"}
      >
        {playing ? <FaVolumeUp /> : <FaVolumeMute />}
      </button>
    </>
  );
}
