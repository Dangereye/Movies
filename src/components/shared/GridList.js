import React from "react";
import CommaSeparatedNumber from "./CommaSeparatedNumber";
import GridItem from "./GridItem";

const GridList = ({ title, list, path, totalResults }) => {
  return (
    <section>
      <div className="container">
        <h2>{title}</h2>
        <span>Showing {list.length}</span>
        <CommaSeparatedNumber number={totalResults} />
        <span> results.</span>
        <div className="grid-list">
          {list
            .sort((a, b) => {
              let aDate, bDate;
              if (a.first_air_date) {
                aDate = new Date(a.first_air_date);
                bDate = new Date(b.first_air_date);
                return bDate - aDate;
              }
              if (a.release_date) {
                aDate = new Date(a.release_date);
                bDate = new Date(b.release_date);
                return bDate - aDate;
              }
              return null;
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
