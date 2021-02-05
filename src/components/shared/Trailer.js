import React from "react";

const Trailer = ({ video }) => {
  return (
    <section>
      <div className="container">
        <h2 className="mb2">{video.name}</h2>
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
        </div>
      </div>
    </section>
  );
};

export default Trailer;
