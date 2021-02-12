import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchData } from "../api/FetchData";
import { categories } from "../data/categories";
import DataStatus from "../components/shared/DataStatus";
import DesktopCategories from "../components/shared/DesktopCategories";
import GridList from "../components/shared/GridList";
import Pagination from "../components/shared/Pagination";

const People = () => {
  const apiKey = process.env.REACT_APP_KEY;
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const { isLoading, isError, isSuccess, data } = useQuery(
    ["People", page],
    () =>
      fetchData(`/person/popular?api_key=${apiKey}&language=en-US&page=${page}`)
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
        <DesktopCategories categories={categories.people} setPage={setPage} />

        <GridList
          title="Popular people."
          list={data.results}
          path="/person"
          totalResults={data.total_results}
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

export default People;
