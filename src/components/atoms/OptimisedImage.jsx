import React, { useState } from "react";

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = "",
  loading = "lazy",
  fallbackSrc = "/fallback.jpg",
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${
        width && height ? "" : "aspect-video"
      }`}
      style={{ width, height }}
    >
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      <img
        src={imgSrc}
        alt={alt}
        loading={loading}
        className={`transition-opacity duration-500 ease-in-out object-cover w-full h-full ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (imgSrc !== fallbackSrc) setImgSrc(fallbackSrc);
        }}
      />
    </div>
  );
};

export default OptimizedImage;
