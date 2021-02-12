import React from "react";
import CommaSeparatedNumber from "./CommaSeparatedNumber";
import GridItem from "./GridItem";

const GridList = ({ title, list, path, totalResults, color }) => {
  return (
    <section style={{ backgroundColor: color ? color : "" }}>
      <div className="container">
        <h2>{title}</h2>
        <span>Showing {list.length}</span>
        <CommaSeparatedNumber number={totalResults} />
        <span> results.</span>
        <div className="grid-list">
          {list
            .sort((a, b) => {
              const aDate = new Date(
                a.first_air_date ? a.first_air_date : a.release_date
              );
              const bDate = new Date(
                b.first_air_date ? b.first_air_date : b.release_date
              );
              return bDate - aDate;
            })
            .map((item, index) => {
              return (
                <GridItem key={`${title}-${index}`} data={item} path={path} />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default React.memo(GridList);
