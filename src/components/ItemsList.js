import React, { useContext } from "react";
import { useQuery } from "react-query";
import { fetchList } from "../api/FetchData";
import { MovieContext } from "../contexts/MovieContext";
import ListItem from "./ListItem";
import Pagination from "./Pagination";

const ItemsList = ({ title, endPoint }) => {
  const { page, setPage, pages, setPages } = useContext(MovieContext);
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
              {data.results.map((item) => (
                <ListItem key={item.id} data={item} />
              ))}
            </div>
            <Pagination page={page} setPage={setPage} pages={pages} />
          </>
        )}
      </div>
    </section>
  );
};

export default ItemsList;
