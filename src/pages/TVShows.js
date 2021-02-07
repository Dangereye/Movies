import React, { useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { fetchData } from "../api/FetchData";
import { categories } from "../data/categories";
import DataStatus from "../components/shared/DataStatus";
import DesktopCategories from "../components/shared/DesktopCategories";
import GridList from "../components/shared/GridList";
import Pagination from "../components/shared/Pagination";

const TVShows = () => {
  const apiKey = process.env.REACT_APP_KEY;
  const { pathname: path } = useLocation();
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  let params;
  let title;
  switch (path) {
    case "/tv-shows-popular":
      params = `/tv/popular?api_key=${apiKey}&language=en-US&page=${page}`;
      title = "Popular TV shows.";
      break;
    case "/tv-shows-top-rated":
      params = `/tv/top_rated?api_key=${apiKey}&language=en-US&page=${page}`;
      title = "Top rated TV shows.";
      break;
    case "/tv-shows-this-week":
      params = `/tv/on_the_air?api_key=${apiKey}&language=en-US&page=${page}`;
      title = "On the air this week.";
      break;
    case "/tv-shows-today":
      params = `/tv/airing_today?api_key=${apiKey}&language=en-US&page=${page}`;
      title = "On the air today.";
      break;
    default:
      break;
  }
  const { isLoading, isError, isSuccess, data } = useQuery(
    [path, path, page],
    () => fetchData(params)
  );
  if (isLoading) {
    return <DataStatus text="Just a moment.." />;
  }
  if (isError) {
    return (
      <DataStatus text="Oops! Something went wrong. Refresh the page, or try again later." />
    );
  }

  if (isSuccess) {
    return (
      <>
        <DesktopCategories categories={categories.tv} setPage={setPage} />
        <GridList
          title={title}
          list={data.results}
          path="/tv-show"
          totalResults={data.totalResults}
        />
        <Pagination
          page={page}
          setPage={setPage}
          pages={pages}
          setPages={setPages}
          totalPages={data.total_pages}
        />
      </>
    );
  }
};

export default TVShows;
