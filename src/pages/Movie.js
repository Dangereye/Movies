import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchData } from "../api/FetchData";
import DataStatus from "../components/shared/DataStatus";
import HistoryPreviousPage from "../components/shared/HistoryPreviousPage";
import MovieHeader from "../components/movies/MovieHeader";
import MovieMedia from "../components/movies/MovieMedia";
import Providers from "../components/movies/Providers";
import MovieCast from "../components/movies/MovieCast";

const MovieDetails = () => {
  const apiKey = process.env.REACT_APP_KEY;
  const { id } = useParams();

  const movieDetails = useQuery(["movie details", id], () =>
    fetchData(`/movie/${id}?api_key=${apiKey}&language=en`)
  );
  const movieCredits = useQuery(["movie credits", id], () =>
    fetchData(`/movie/${id}/credits?api_key=${apiKey}&language=en`)
  );

  if (movieDetails.isLoading || movieCredits.isLoading) {
    return <DataStatus text="Just a moment.." />;
  }

  if (movieDetails.isError || movieCredits.isError) {
    return (
      <DataStatus text="Oops! Something went wrong. Refresh the page, or try again later." />
    );
  }

  if (movieDetails.isSuccess && movieCredits.isSuccess) {
    return (
      <>
        <HistoryPreviousPage />
        <MovieHeader details={movieDetails.data} credits={movieCredits.data} />
        <MovieMedia />
        <Providers />
        <MovieCast cast={movieCredits.data.cast} />
      </>
    );
  }
};

export default MovieDetails;
