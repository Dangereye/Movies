import React, { useContext } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchData } from "../api/FetchData";
import HistoryPreviousPage from "../components/shared/HistoryPreviousPage";
import DataStatus from "../components/shared/DataStatus";
import TvHeader from "../components/tv/TvHeader";
import Seasons from "../components/tv/Seasons";
import { TVContext } from "../contexts/TVContext";
import GridList from "../components/shared/GridList";
import Pagination from "../components/shared/Pagination";

const TVShow = () => {
  const apiKey = process.env.REACT_APP_KEY;
  const { id } = useParams();
  const { page, setPage, pages, setPages } = useContext(TVContext);
  const tvShowDetails = useQuery(["tvShowDetails", id], () =>
    fetchData(`/tv/${id}?api_key=${apiKey}&language=en`)
  );
  const tvShowCredits = useQuery(["tvShowCredits", id], () =>
    fetchData(`/tv/${id}/credits?api_key=${apiKey}&language=en`)
  );
  const tvShowSimilar = useQuery(["tvShowSimilar", id, page], () =>
    fetchData(`/tv/${id}/similar?api_key=${apiKey}&language=en&page=${page}`)
  );

  if (
    tvShowDetails.isLoading ||
    tvShowCredits.isLoading ||
    tvShowSimilar.isLoading
  ) {
    return <DataStatus text="Just a moment.." />;
  }
  if (
    tvShowDetails.isError ||
    tvShowCredits.isLoading ||
    tvShowSimilar.isError
  ) {
    return (
      <DataStatus text="Oops! Something went wrong. Refresh the page, or try again later." />
    );
  }
  if (
    tvShowDetails.isSuccess &&
    tvShowCredits.isSuccess &&
    tvShowSimilar.isSuccess
  ) {
    return (
      <>
        <HistoryPreviousPage />
        <TvHeader details={tvShowDetails.data} />
        <Seasons details={tvShowDetails.data} />
        <GridList
          title="Cast members"
          list={tvShowCredits.data.cast}
          path="/person"
          totalResults={null}
        />
        <GridList
          title="Similar shows"
          list={tvShowSimilar.data.results}
          path="/tv-show"
          totalResults={tvShowSimilar.data.total_results}
        />
        <Pagination
          page={page}
          setPage={setPage}
          pages={pages}
          setPages={setPages}
          totalPages={tvShowSimilar.data.total_pages}
        />
      </>
    );
  }
};

export default TVShow;
