import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchItem } from "../api/FetchData";
import MovieCast from "../components/movies/MovieCast";
import MovieHeader from "../components/movies/MovieHeader";
import MovieMedia from "../components/movies/MovieMedia";
import Providers from "../components/movies/Providers";

const MovieDetails = () => {
  const { id } = useParams();

  const details = useQuery(["details", `/movie/${id}`], () =>
    fetchItem(`/movie/${id}`)
  );
  const credits = useQuery(["credits", `/movie/${id}/credits`], () =>
    fetchItem(`/movie/${id}/credits`)
  );
  console.log(details);

  if (details.isLoading || credits.isLoading) {
    return <div className="status">Loading data..</div>;
  }

  if (details.isError) {
    return <div className="status">Error: {details.error.message}</div>;
  }

  if (credits.isError) {
    return <div className="status">Error: {credits.error.message}</div>;
  }

  if (details.isSuccess && credits.isSuccess) {
    return (
      <>
        <MovieHeader details={details} credits={credits} />
        <MovieMedia />
        <Providers />
        <MovieCast cast={credits.data.cast} />
      </>
    );
  }
};

export default MovieDetails;
