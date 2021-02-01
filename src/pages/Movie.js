import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchData } from "../api/FetchData";
import DataStatus from "../components/shared/DataStatus";
import HistoryPreviousPage from "../components/shared/HistoryPreviousPage";
import MovieHeader from "../components/movies/MovieHeader";
import VideoList from "../components/shared/VideoList";
import Providers from "../components/movies/Providers";
import GridList from "../components/shared/GridList";

const MovieDetails = () => {
  const apiKey = process.env.REACT_APP_KEY;
  const { id } = useParams();

  const movieDetails = useQuery(["movieDetails", id], () =>
    fetchData(`/movie/${id}?api_key=${apiKey}&language=en`)
  );
  const movieCredits = useQuery(["movieCredits", id], () =>
    fetchData(`/movie/${id}/credits?api_key=${apiKey}&language=en`)
  );
  const movieVideos = useQuery(["movieVideos", id], () =>
    fetchData(`/movie/${id}/videos?api_key=${apiKey}&language=en`)
  );

  if (
    movieDetails.isLoading ||
    movieCredits.isLoading ||
    movieVideos.isLoading
  ) {
    return <DataStatus text="Just a moment.." />;
  }

  if (movieDetails.isError || movieCredits.isError || movieVideos.isError) {
    return (
      <DataStatus text="Oops! Something went wrong. Refresh the page, or try again later." />
    );
  }

  if (
    movieDetails.isSuccess &&
    movieCredits.isSuccess &&
    movieVideos.isSuccess
  ) {
    return (
      <>
        <HistoryPreviousPage />
        <MovieHeader details={movieDetails.data} credits={movieCredits.data} />
        <VideoList
          title="Videos"
          videos={movieVideos.data.results}
          totalResults={null}
        />
        <Providers />
        <GridList
          title="Cast members"
          list={movieCredits.data.cast}
          path="/person"
          totalResults={movieCredits.data.total_results}
        />
      </>
    );
  }
};

export default MovieDetails;
