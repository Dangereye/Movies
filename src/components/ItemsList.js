import React from "react";
import { useQuery } from "react-query";
import { fetchList } from "../api/FetchData";
import MovieItem from "./MovieItem";
import Pagination from "./Pagination";
import PersonItem from "./PersonItem";

const ItemsList = ({ title, endPoint, context }) => {
  const { page, setPage, pages, setPages } = context;
  const { status, data, error } = useQuery([title, endPoint, page], () =>
    fetchList(endPoint, page)
  );

  return (
    <section>
      <div className="container">
        <h2>{title}</h2>

        {status === "loading" && <div className="status">Loading data..</div>}
        {status === "error" && (
          <div className="status">Error: {error.message}</div>
        )}
        {status === "success" && (
          <>
            {setPages(data.total_pages)}
            <div className="status">
              Showing {data.results.length} of {data.total_results} results
            </div>
            <div className="items-list">
              {data.results.map((item) =>
                endPoint.includes("movie") ? (
                  <MovieItem key={item.id} data={item} />
                ) : endPoint.includes("person") ? (
                  <PersonItem key={item.id} data={item} />
                ) : (
                  ""
                )
              )}
            </div>
            <Pagination page={page} setPage={setPage} pages={pages} />
          </>
        )}
      </div>
    </section>
  );
};

export default ItemsList;
