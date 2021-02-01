import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchData } from "../api/FetchData";
import DataStatus from "../components/shared/DataStatus";
import HistoryPreviousPage from "../components/shared/HistoryPreviousPage";
import PersonHeader from "../components/people/PersonHeader";
import CareerStats from "../components/people/CareerStats";
import Biography from "../components/people/Biography";
import GridList from "../components/shared/GridList";

const Person = () => {
  const apiKey = process.env.REACT_APP_KEY;
  const { id } = useParams();
  const personDetails = useQuery(["person details", id], () =>
    fetchData(`/person/${id}?api_key=${apiKey}&language=en`)
  );
  const personMovieCredits = useQuery(["person movie credits", id], () =>
    fetchData(`/person/${id}/movie_credits?api_key=${apiKey}&language=en`)
  );
  const personTvCredits = useQuery(["person tv credits", id], () =>
    fetchData(`/person/${id}/tv_credits?api_key=${apiKey}&language=en`)
  );

  if (
    personDetails.isLoading ||
    personMovieCredits.isLoading ||
    personTvCredits.isLoading
  ) {
    return <DataStatus text="Just a moment.." />;
  }

  if (
    personDetails.isError ||
    personMovieCredits.isError ||
    personTvCredits.isError
  ) {
    return (
      <DataStatus text="Oops! Something went wrong. Refresh the page, or try again later." />
    );
  }

  if (
    personDetails.isSuccess &&
    personMovieCredits.isSuccess &&
    personTvCredits.isSuccess
  ) {
    return (
      <>
        <HistoryPreviousPage />
        <PersonHeader
          details={personDetails}
          movies={personMovieCredits}
          tv={personTvCredits}
        />
        <CareerStats
          movies={personMovieCredits.data.cast}
          tv={personTvCredits.data.cast}
          popularity={personDetails.data.popularity}
        />
        <Biography />
        <GridList
          title="Movie credits"
          list={personMovieCredits.data.cast}
          path="/movie"
          totalResults={null}
        />
        <GridList
          title="TV credits"
          list={personTvCredits.data.cast}
          path="/tv-show"
          totalResults={null}
        />
      </>
    );
  }
};

export default Person;
