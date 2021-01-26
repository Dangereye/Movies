import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchData } from "../../api/FetchData";
import DataStatus from "../shared/DataStatus";
import VideosList from "../shared/VideosList";

const MovieMedia = () => {
  const apiKey = process.env.REACT_APP_KEY;
  const { id } = useParams();
  const { isLoading, isError, isSuccess, data } = useQuery("videos", () =>
    fetchData(`/movie/${id}/videos?api_key=${apiKey}&language=en`)
  );
  return (
    <section id="movie-media">
      <div className="container">
        {isLoading && (
          <>
            <h2>Videos</h2>
            <DataStatus text="Loading videos.." />
          </>
        )}
        {isError && (
          <>
            <h2>Videos</h2>
            <DataStatus text="Failed to get videos." />
          </>
        )}
        {isSuccess && (
          <>
            <h2>Videos ({data.results.length})</h2>
            {data.results.length > 0 ? (
              <VideosList videos={data.results} />
            ) : (
              "No videos available."
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default MovieMedia;
