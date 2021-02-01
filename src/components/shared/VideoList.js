import React from "react";
import CommaSeparatedNumber from "./CommaSeparatedNumber";
import VideoItem from "./VideoItem";

const VideoList = ({ title, videos, totalResults }) => {
  return (
    <section>
      <div className="container">
        <h2>{title}</h2>
        <span>Showing {videos.length}</span>
        <CommaSeparatedNumber number={totalResults} />
        <span> results.</span>

        {videos.length > 0 && (
          <div className="videos-list">
            {videos.map((video, index) => {
              return <VideoItem key={`videoList ${index}`} video={video} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoList;
