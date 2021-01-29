import React from "react";
import { useQuery } from "react-query";
import { fetchData } from "../../api/FetchData";
import DataStatus from "../shared/DataStatus";
import GridItem from "../shared/GridItem";

const SimilarTvShows = ({ id, apiKey }) => {
  const { isLoading, isError, isSuccess, data } = useQuery(
    ["similar", id],
    () => fetchData(`/tv/${id}/similar?api_key=${apiKey}&language=en`)
  );

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
      <section>
        <div className="container">
          <h2>Similar TV Shows</h2>
          <div className="grid-list">
            {data.results.map((item, index) => (
              <GridItem
                key={`similar${index}`}
                data={item}
                path={"/tv-shows/:id"}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
};

export default SimilarTvShows;
