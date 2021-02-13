import React, { useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { fetchData } from "../api/FetchData";
import { categories } from "../data/categories";
import DataStatus from "../components/shared/DataStatus";
import DesktopCategories from "../components/shared/DesktopCategories";
import GridList from "../components/shared/GridList";
import Pagination from "../components/shared/Pagination";

const Movies = () => {
  const apiKey = process.env.REACT_APP_KEY;
  const { pathname: path } = useLocation();
  const [page, setPage] = useState(1);
  let params;
  let title;
  switch (path) {
    case "/movies-popular":
      params = `/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`;
      title = "Popular movies.";
      break;
    case "/movies-in-theatres":
      params = `/movie/now_playing?api_key=${apiKey}&language=en-US&page=${page}`;
      title = "Playing in theatres.";
      break;
    case "/movies-top-rated":
      params = `/movie/top_rated?api_key=${apiKey}&language=en-US&page=${page}`;
      title = "Top rated movies.";
      break;
    case "/movies-upcoming":
      params = `/movie/upcoming?api_key=${apiKey}&language=en-US&page=${page}`;
      title = "Upcoming movies.";
      break;
    default:
      break;
  }
  const { isLoading, isError, isSuccess, data } = useQuery(
    [path, path, page],
    () => fetchData(params),
    { staleTime: 1000 * 60 * 60 }
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
        <DesktopCategories categories={categories.movies} setPage={setPage} />
        <GridList
          title={title}
          list={data.results}
          path="/movie"
          totalResults={data.total_results}
        />
        <Pagination
          page={page}
          setPage={setPage}
          totalPages={data.total_pages}
        />
      </>
    );
  }
};

export default Movies;
