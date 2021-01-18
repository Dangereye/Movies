import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchItem } from "../api/FetchData";
import MovieCast from "../components/MovieCast";
import MovieHeader from "../components/MovieHeader";

const MovieDetails = () => {
  const { id } = useParams();

  const details = useQuery(["details", `/movie/${id}`], () =>
    fetchItem(`/movie/${id}`)
  );
  const credits = useQuery(["credits", `/movie/${id}/credits`], () =>
    fetchItem(`/movie/${id}/credits`)
  );

  if (details.loading || credits.loading) {
    return <div className="status">Loading data..</div>;
  }

  if (details.error || credits.error) {
    return <div className="status">Error: {details.error.message}</div>;
  }

  if (details.status === "success" && credits.status === "success") {
    return (
      <>
        <MovieHeader details={details} credits={credits} />
        <MovieCast cast={credits.data.cast} />
      </>
    );
  }
  return null;
};

export default MovieDetails;
