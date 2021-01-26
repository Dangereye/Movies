import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchData } from "../../api/FetchData";
import DataStatus from "../shared/DataStatus";
import ProvidersList from "./ProvidersList";

const Providers = () => {
  const apiKey = process.env.REACT_APP_KEY;
  const { id } = useParams();
  const { isLoading, isError, isSuccess, data } = useQuery("Providers", () =>
    fetchData(`/movie/${id}/watch/providers?api_key=${apiKey}`)
  );

  return (
    <section>
      <div className="container">
        <h2>Providers</h2>
        {isLoading && <DataStatus text="Loading provider info.." />}
        {isError && <DataStatus text="No provider data." />}
        {isSuccess && (
          <>
            {data.results.GB ? (
              <>
                <div className="option">
                  <h3>Watch it</h3>
                  {data.results.GB.flatrate ? (
                    <ProvidersList data={data.results.GB.flatrate} />
                  ) : (
                    <div>Currently unavailable.</div>
                  )}
                </div>
                <div className="option">
                  <h3>Buy it</h3>
                  {data.results.GB.buy ? (
                    <ProvidersList data={data.results.GB.buy} />
                  ) : (
                    <div>Currently unavailable.</div>
                  )}
                </div>
                <div className="option">
                  <h3>Rent it</h3>
                  {data.results.GB.rent ? (
                    <ProvidersList data={data.results.GB.rent} />
                  ) : (
                    <div>Currently unavailable.</div>
                  )}
                </div>
              </>
            ) : (
              "No details found."
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Providers;
