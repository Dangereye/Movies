import React from "react";
import ProviderOption from "./ProviderOption";

const Providers = ({ data }) => {
  return (
    <section className="providers">
      <div className="container">
        <h2>UK Providers</h2>
        <div className="providers-options">
          {data.flatrate && (
            <ProviderOption title="Watch it." list={data.flatrate} />
          )}
          {data.buy && <ProviderOption title="Buy it." list={data.buy} />}
          {data.rent && <ProviderOption title="Rent it." list={data.rent} />}
        </div>
      </div>
    </section>
  );
};

export default Providers;
