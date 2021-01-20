import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchItem } from "../../api/FetchData";
import VideosList from "../shared/VideosList";

const MovieMedia = () => {
  const { id } = useParams();
  const videos = useQuery(["credits", `/movie/${id}/videos`], () =>
    fetchItem(`/movie/${id}/videos`)
  );
  //   console.log("Videos: ", videos);

  if (videos.status === "success") {
    return (
      <section>
        <div className="container">
          <h2>Videos ({videos.data.results.length})</h2>
          {videos.isLoading && <div>Loading, please wait..</div>}
          {videos.isError && <div>Error: {videos.error.message}</div>}
          {videos.isSuccess && <VideosList videos={videos.data.results} />}
        </div>
      </section>
    );
  }
  return null;
};

export default MovieMedia;
