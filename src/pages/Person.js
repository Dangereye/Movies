import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchItem } from "../api/FetchData";
import Biography from "../components/people/Biography";
import CareerStats from "../components/people/CareerStats";
import PersonHeader from "../components/people/PersonHeader";

const Person = () => {
  const { id } = useParams();
  const details = useQuery(["person", `/person/${id}`], () =>
    fetchItem(`/person/${id}`)
  );
  const movieCredits = useQuery(
    ["credits", `/person/${id}/movie_credits`],
    () => fetchItem(`/person/${id}/movie_credits`)
  );
  const tvCredits = useQuery(["credits", `/person/${id}/tv_credits`], () =>
    fetchItem(`/person/${id}/tv_credits`)
  );
  if (details.loading || movieCredits.loading || tvCredits.loading) {
    return <div className="status">Loading data..</div>;
  }

  if (details.error || movieCredits.error || tvCredits.error) {
    return <div className="status">Error: {details.error.message}</div>;
  }

  if (
    details.status === "success" &&
    movieCredits.status === "success" &&
    tvCredits.status === "success"
  ) {
    return (
      <>
        {console.log("Details: ", details.data)}
        {console.log("Movies: ", movieCredits.data)}
        {console.log("TV: ", tvCredits.data)}
        <PersonHeader details={details} movies={movieCredits} tv={tvCredits} />
        <CareerStats
          movies={movieCredits.data.cast}
          tv={tvCredits.data.cast}
          popularity={details.data.popularity}
        />
        <Biography details={details} />
      </>
    );
  }
  return null;
};

export default Person;
