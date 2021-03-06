import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div className="video-card">
      <div className="video">
        <iframe
          title={video.id}
          width="100%"
          src={`https://www.youtube.com/embed/${video.key}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p>{video.name}</p>
    </div>
  );
};

export default VideoItem;
