import React, { useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { fetchData } from "../api/FetchData";
import DataStatus from "../components/shared/DataStatus";
import HistoryPreviousPage from "../components/shared/HistoryPreviousPage";
import GridList from "../components/shared/GridList";

const Search = () => {
  const apiKey = process.env.REACT_APP_KEY;
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const query = params.get("query");
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const searchMovies = useQuery(["searchMovies", page, query], () =>
    fetchData(
      `/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=${page}&include_adult=true`
    )
  );
  const searchTvShows = useQuery(["searchTvShows", page, query], () =>
    fetchData(
      `/search/tv?api_key=${apiKey}&language=en-US&query=${query}&page=${page}&include_adult=true`
    )
  );
  const searchPeople = useQuery(["searchPeople", page, query], () =>
    fetchData(
      `/search/person?api_key=${apiKey}&language=en-US&query=${query}&page=${page}&include_adult=true`
    )
  );
  if (
    searchMovies.isLoading ||
    searchTvShows.isLoading ||
    searchPeople.isLoading
  ) {
    return <DataStatus text="Just a moment.." />;
  }
  if (searchMovies.isError || searchTvShows.isError || searchPeople.isError) {
    return (
      <DataStatus text="Oops! Something went wrong. Refresh the page, or try again later." />
    );
  }

  if (
    searchMovies.isSuccess &&
    searchTvShows.isSuccess &&
    searchPeople.isSuccess
  ) {
    return (
      <>
        {console.log("Search Movies: ", searchMovies)}
        {console.log("Search TV: ", searchTvShows)}
        {console.log("Search People: ", searchPeople)}
        <HistoryPreviousPage />
        <GridList
          title={`Movies matching - "${query}"`}
          list={searchMovies.data.results}
          path="/movie"
          totalResults={searchMovies.data.total_results}
        />
        <GridList
          title={`TV Shows matching - "${query}"`}
          list={searchTvShows.data.results}
          path="/tv-show"
          totalResults={searchTvShows.data.total_results}
        />
        <GridList
          title={`People matching - "${query}"`}
          list={searchPeople.data.results}
          path="/person"
          totalResults={searchPeople.data.total_results}
        />
      </>
    );
  }
};

export default Search;
