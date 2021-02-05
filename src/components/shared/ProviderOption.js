import React from "react";

const ProviderOption = ({ title, list }) => {
  return (
    <div className="option">
      <h3>{title}</h3>
      <ul>
        {list.map((provider, index) => {
          return (
            <li key={`Watch-${index}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${provider.logo_path}`}
                alt={provider.provider_name}
              />
              {provider.provider_name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default React.memo(ProviderOption);
