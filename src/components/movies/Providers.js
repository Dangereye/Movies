import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchItem } from "../../api/FetchData";
import ProvidersList from "./ProvidersList";

const Providers = () => {
  const { id } = useParams();
  const { isLoading, isError, error, isSuccess, data: providers } = useQuery(
    ["Providers", `/movie/${id}/watch/providers`],
    () => fetchItem(`/movie/${id}/watch/providers`)
  );

  return (
    <section>
      <div className="container">
        {isLoading && <div>Loading..</div>}
        {isError && <div>Error:{error.message}</div>}
        {isSuccess && (
          <>
            {console.log("Providers: ", providers)}
            {providers.results.GB ? (
              <>
                <div className="option">
                  <h2>Watch it</h2>
                  {providers.results.GB.flatrate ? (
                    <ProvidersList data={providers.results.GB.flatrate} />
                  ) : (
                    <div>Currently available.</div>
                  )}
                </div>
                <div className="option">
                  <h2>Buy it</h2>
                  {providers.results.GB.buy ? (
                    <ProvidersList data={providers.results.GB.buy} />
                  ) : (
                    <div>Currently available.</div>
                  )}
                </div>
                <div className="option">
                  <h2>Rent it</h2>
                  {providers.results.GB.rent ? (
                    <ProvidersList data={providers.results.GB.rent} />
                  ) : (
                    <div>Currently available.</div>
                  )}
                </div>
              </>
            ) : (
              ""
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Providers;
