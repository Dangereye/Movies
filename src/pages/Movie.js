import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchData } from "../api/FetchData";
import DataStatus from "../components/shared/DataStatus";
import HistoryPreviousPage from "../components/shared/HistoryPreviousPage";
import MovieHeader from "../components/movies/MovieHeader";
import Providers from "../components/shared/Providers";
import GridList from "../components/shared/GridList";
import Trailer from "../components/shared/Trailer";

const Movie = () => {
  const apiKey = process.env.REACT_APP_KEY;
  const { id } = useParams();

  const movieDetails = useQuery(["movieDetails", id], () =>
    fetchData(`/movie/${id}?api_key=${apiKey}&language=en`)
  );
  const movieVideos = useQuery(["movieVideos", id], () =>
    fetchData(`/movie/${id}/videos?api_key=${apiKey}&language=en`)
  );
  const movieProviders = useQuery(["providers", id], () =>
    fetchData(`/movie/${id}/watch/providers?api_key=${apiKey}`)
  );
  const movieCredits = useQuery(["movieCredits", id], () =>
    fetchData(`/movie/${id}/credits?api_key=${apiKey}&language=en`)
  );
  const movieSimilar = useQuery(["movieSimilar", id], () =>
    fetchData(`/movie/${id}/similar?api_key=${apiKey}&language=en&page=1`)
  );

  if (
    movieDetails.isLoading ||
    movieVideos.isLoading ||
    movieProviders.isLoading ||
    movieCredits.isLoading ||
    movieSimilar.isLoading
  ) {
    return <DataStatus text="Just a moment.." />;
  }

  if (
    movieDetails.isError ||
    movieVideos.isError ||
    movieProviders.isError ||
    movieCredits.isError ||
    movieSimilar.isError
  ) {
    return (
      <DataStatus text="Oops! Something went wrong. Refresh the page, or try again later." />
    );
  }

  if (
    movieDetails.isSuccess &&
    movieVideos.isSuccess &&
    movieProviders.isSuccess &&
    movieCredits.isSuccess &&
    movieSimilar.isSuccess
  ) {
    return (
      <>
        <HistoryPreviousPage />
        <MovieHeader details={movieDetails.data} credits={movieCredits.data} />
        {movieVideos.data.results.length > 0 && (
          <Trailer video={movieVideos.data.results[0]} />
        )}

        {movieProviders.data.results.GB && (
          <Providers data={movieProviders.data.results.GB} />
        )}
        {movieCredits.data.cast.length > 0 && (
          <GridList
            title="Cast members"
            list={movieCredits.data.cast}
            path="/person"
            totalResults={movieCredits.data.total_results}
          />
        )}
        {movieSimilar.data.results.length > 0 && (
          <GridList
            title="You may also like.."
            list={movieSimilar.data.results}
            path="/movie"
            totalResults={null}
          />
        )}
      </>
    );
  }
};

export default Movie;
