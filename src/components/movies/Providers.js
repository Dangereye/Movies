import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchItem } from "../../api/FetchData";

const Providers = () => {
  const { id } = useParams();
  const { isLoading, isError, error, isSuccess, data: providers } = useQuery(
    ["Providers", `/movie/${id}/watch/providers`],
    () => fetchItem(`/movie/${id}/watch/providers`)
  );

  return (
    <section>
      <div className="container">
        <h2>Rent it on:</h2>
        {isLoading && <div>Loading..</div>}
        {isError && <div>Error:{error.message}</div>}
        {isSuccess && (
          <>
            {console.log("Providers: ", providers)}
            {providers.results.BG ? (
              <div className="providers">
                {providers.results.BG.map(() => {
                  return (
                    <div className="item">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${providers.results.BG.logo_path}`}
                        alt={providers.results.BG.provider_name}
                      />
                      <p>{providers.results.BG.provider_name}</p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>Not currently available to rent in the UK</div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Providers;
