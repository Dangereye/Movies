import React from "react";

const ProvidersList = ({ data }) => {
  return (
    <div className="providers">
      {data.map((item) => {
        return (
          <div className="item" key={item.provider_name}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.logo_path}`}
              alt={item.provider_name}
            />
            <p>{item.provider_name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProvidersList;
