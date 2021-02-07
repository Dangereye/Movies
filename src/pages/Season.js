import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchData } from "../api/FetchData";
import DataStatus from "../components/shared/DataStatus";
import GridList from "../components/shared/GridList";
import HistoryPreviousPage from "../components/shared/HistoryPreviousPage";
import Episodes from "../components/tv/Episodes";
import SeasonHeader from "../components/tv/SeasonHeader";

const Season = () => {
  const apiKey = process.env.REACT_APP_KEY;
  const { id, season } = useParams();
  const seasonDetails = useQuery(["seasoDetails", id, season], () =>
    fetchData(`/tv/${id}/season/${season}?api_key=${apiKey}&language=en`)
  );
  const seasonCredits = useQuery(["seasonCredits", id, season], () =>
    fetchData(
      `/tv/${id}/season/${season}/credits?api_key=${apiKey}&language=en`
    )
  );

  if (seasonDetails.isLoading || seasonCredits.isLoading) {
    return <DataStatus text="Just a moment.." />;
  }
  if (seasonDetails.isError || seasonCredits.isError) {
    return (
      <DataStatus text="Oops! Something went wrong. Refresh the page, or try again later." />
    );
  }
  if (seasonDetails.isSuccess && seasonCredits.isSuccess) {
    return (
      <>
        <HistoryPreviousPage />
        <SeasonHeader details={seasonDetails.data} />
        {seasonCredits.data.cast.length > 0 && (
          <GridList
            title="Cast members"
            list={seasonCredits.data.cast}
            path="/person"
            totalResults={null}
          />
        )}
        {seasonDetails.data.episodes.length > 0 && (
          <Episodes list={seasonDetails.data.episodes} />
        )}
      </>
    );
  }
};

export default Season;
