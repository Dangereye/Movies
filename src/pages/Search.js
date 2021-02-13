import React, { useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { fetchData } from "../api/FetchData";
import DataStatus from "../components/shared/DataStatus";
import GridList from "../components/shared/GridList";
import SearchOptionsBar from "../components/shared/SearchOptionsBar";
import Pagination from "../components/shared/Pagination";

const Search = () => {
  const apiKey = process.env.REACT_APP_KEY;
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const query = params.get("query");
  const [category, setCategory] = useState("movies");
  const [page, setPage] = useState(1);
  let totalPages;

  const searchMovies = useQuery(["searchMovies", page, query], () =>
    fetchData(
      `/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=${page}&include_adult=false`
    )
  );
  const searchTvShows = useQuery(["searchTvShows", page, query], () =>
    fetchData(
      `/search/tv?api_key=${apiKey}&language=en-US&query=${query}&page=${page}&include_adult=false`
    )
  );
  const searchPeople = useQuery(["searchPeople", page, query], () =>
    fetchData(
      `/search/person?api_key=${apiKey}&language=en-US&query=${query}&page=${page}&include_adult=false`
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
    switch (category) {
      case "movies":
        totalPages = searchMovies.data.total_pages;
        break;
      case "tv-shows":
        totalPages = searchTvShows.data.total_pages;
        break;
      case "people":
        totalPages = searchPeople.data.total_pages;
        break;
      default:
        totalPages = 1;
    }
    return (
      <>
        <SearchOptionsBar setCategory={setCategory} setPage={setPage} />
        {category === "movies" && (
          <GridList
            title={`Movies matching - "${query}"`}
            list={searchMovies.data.results}
            path="/movie"
            totalResults={searchMovies.data.total_results}
          />
        )}
        {category === "tv-shows" && (
          <GridList
            title={`TV Shows matching - "${query}"`}
            list={searchTvShows.data.results}
            path="/tv-show"
            totalResults={searchTvShows.data.total_results}
          />
        )}
        {category === "people" && (
          <GridList
            title={`People matching - "${query}"`}
            list={searchPeople.data.results}
            path="/person"
            totalResults={searchPeople.data.total_results}
          />
        )}
        {totalPages > 1 && (
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        )}
      </>
    );
  }
};

export default Search;
