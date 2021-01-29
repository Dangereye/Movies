import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchData } from "../api/FetchData";
import HistoryPreviousPage from "../components/shared/HistoryPreviousPage";
import DataStatus from "../components/shared/DataStatus";
import TvHeader from "../components/tv/TvHeader";
import Seasons from "../components/tv/Seasons";
import SimilarTvShows from "../components/tv/SimilarTvShows";

const TVShow = () => {
  const apiKey = process.env.REACT_APP_KEY;
  const { id } = useParams();
  const tvShowDetails = useQuery(["tv-show details", id], () =>
    fetchData(`/tv/${id}?api_key=${apiKey}&language=en`)
  );

  if (tvShowDetails.isLoading) {
    return <DataStatus text="Just a moment.." />;
  }
  if (tvShowDetails.isError) {
    return (
      <DataStatus text="Oops! Something went wrong. Refresh the page, or try again later." />
    );
  }
  if (tvShowDetails.isSuccess) {
    console.log("TVShow", tvShowDetails);
    return (
      <>
        <HistoryPreviousPage />
        <TvHeader details={tvShowDetails.data} />
        <Seasons details={tvShowDetails.data} />
        <SimilarTvShows id={id} apiKey={apiKey} />
      </>
    );
  }
};

export default TVShow;
