import React, { useEffect, useContext } from "react";
import { useQuery } from "react-query";
import { fetchData } from "../../api/FetchData";
import Pagination from "./Pagination";
import GridItem from "./GridItem";
import DataStatus from "./DataStatus";
import { useLocation } from "react-router-dom";

const GridList = ({ title, endPoint, context }) => {
  const apiKey = process.env.REACT_APP_KEY;
  const { pathname } = useLocation();
  const { page, setPage, pages, setPages } = useContext(context);
  const { isLoading, isError, isSuccess, data } = useQuery([title, page], () =>
    fetchData(`${endPoint}?api_key=${apiKey}&language=en&page=${page}`)
  );

  useEffect(() => {
    if (isSuccess) {
      setPages(data.total_pages);
    }
  });

  if (isLoading) {
    return <DataStatus text="Just a moment.." />;
  }

  if (isError) {
    return (
      <DataStatus
        text={`Oops! Something went wrong. Refresh the page, or try again later.`}
      />
    );
  }
  if (isSuccess) {
    return (
      <>
        {isSuccess && (
          <section>
            <div className="container">
              <h2>{title}</h2>
              <p>
                Showing {data.results.length} of {data.total_results} results
              </p>

              <div className="grid-list">
                {data.results.map((item) => (
                  <GridItem
                    key={`${pathname}${item.id}`}
                    data={item}
                    path={pathname}
                  />
                ))}
              </div>
              <Pagination page={page} setPage={setPage} pages={pages} />
            </div>
          </section>
        )}
      </>
    );
  }
};

export default GridList;
