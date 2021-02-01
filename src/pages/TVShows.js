import React, { useContext } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { fetchData } from "../api/FetchData";
import { TVContext } from "../contexts/TVContext";
import DataStatus from "../components/shared/DataStatus";
import DesktopCategories from "../components/shared/DesktopCategories";
import GridList from "../components/shared/GridList";
import Pagination from "../components/shared/Pagination";

const TVShows = () => {
  const apiKey = process.env.REACT_APP_KEY;
  const { pathname: path } = useLocation();
  const { categories, page, setPage, pages, setPages } = useContext(TVContext);
  let params;
  let title;
  switch (path) {
    case "/popular-tv-shows":
      params = `/tv/popular?api_key=${apiKey}&language=en-US&page=${page}`;
      title = "Popular TV shows.";
      break;
    case "/top-rated-tv-shows":
      params = `/tv/top_rated?api_key=${apiKey}&language=en-US&page=${page}`;
      title = "Top rated TV shows.";
      break;
    case "/this-week-tv-shows":
      params = `/tv/on_the_air?api_key=${apiKey}&language=en-US&page=${page}`;
      title = "TV shows on the air this week.";
      break;
    case "/today-tv-shows":
      params = `/tv/airing_today?api_key=${apiKey}&language=en-US&page=${page}`;
      title = "TV shows on the air today.";
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
