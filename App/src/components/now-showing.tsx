"use client";

import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NowShowing: React.FC<{ currentImage: string }> = ({ currentImage }) => {
  const navigate = useNavigate();
  const [mediaItems, setMediaItems] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (currentImage) {
      setMediaItems((prevItems) => [...prevItems, currentImage]);
    }
  }, [currentImage]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
    }, 30000);

    return () => clearInterval(interval);
  }, [mediaItems.length]);

  const isVideo = (url: string) => {
    const videoExtensions = [
      ".mp4",
      ".mpeg",
      ".mov",
      ".avi",
      ".mkv",
      ".webm",
      ".ogg",
      ".3gp",
      ".flv",
    ];
    return videoExtensions.some((extension) =>
      url.toLowerCase().endsWith(extension)
    );
  };

  const navigateToFullScreen = () => {
    navigate("/fullscreen");
  };

  return (
    <div
      className="h-full w-full overflow-hidden"
      onClick={navigateToFullScreen}
    >
      <h3 className="text-2xl font-bold text-blue-800 mb-2 text-center">
        Now Showing
      </h3>
      <Carousel pauseOnHover>
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-full w-full"
          >
            {isVideo(item) ? (
              <video
                src={item}
                className="h-[280px] w-[350px] object-cover"
                controls
                onError={(e) => {
                  console.error("Error loading video:", item);
                  e.currentTarget.style.display = "none";
                }}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={item}
                alt="Currently Showing"
                className="h-[280px] w-[350px] object-cover"
                onError={(e) => {
                  console.error("Error loading image:", item);
                  e.currentTarget.style.display = "none";
                }}
              />
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default NowShowing;
