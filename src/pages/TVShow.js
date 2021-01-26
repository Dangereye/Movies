import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchData } from "../api/FetchData";
import HistoryPreviousPage from "../components/shared/HistoryPreviousPage";
import DataStatus from "../components/shared/DataStatus";
import TvHeader from "../components/tv/TvHeader";

const TVShow = () => {
  const apiKey = process.env.REACT_APP_KEY;
  const { id } = useParams();
  const tvShowDetails = useQuery("tv-show details", () =>
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
    return (
      <>
        {console.log(tvShowDetails)}
        <HistoryPreviousPage />
        <TvHeader details={tvShowDetails.data} />
      </>
    );
  }
};

export default TVShow;
