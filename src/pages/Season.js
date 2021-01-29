import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchData } from "../api/FetchData";
import DataStatus from "../components/shared/DataStatus";
import HistoryPreviousPage from "../components/shared/HistoryPreviousPage";
import Episodes from "../components/tv/Episodes";
import SeasonHeader from "../components/tv/SeasonHeader";

const Season = () => {
  const apiKey = process.env.REACT_APP_KEY;
  const { id, season } = useParams();
  const seasonDetails = useQuery(["season details", id, season], () =>
    fetchData(`/tv/${id}/season/${season}?api_key=${apiKey}&language=en`)
  );

  if (seasonDetails.isLoading) {
    return <DataStatus text="Just a moment.." />;
  }
  if (seasonDetails.isError) {
    return (
      <DataStatus text="Oops! Something went wrong. Refresh the page, or try again later." />
    );
  }
  if (seasonDetails.isSuccess) {
    return (
      <>
        <HistoryPreviousPage />
        <SeasonHeader details={seasonDetails.data} />
        <Episodes details={seasonDetails.data} />
      </>
    );
  }
};

export default Season;
