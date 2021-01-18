import React from "react";

const CareerStats = ({ movies, tv, popularity }) => {
  return (
    <section id="career-stats">
      <div className="container">
        <div className="content">
          <div className="stat-card">
            <h2>{popularity.toFixed(1)}</h2>
            <p>Popularity</p>
          </div>
          <div className="stat-card">
            <h2>{movies.length}</h2>
            <p>Movies</p>
          </div>
          <div className="stat-card">
            <h2>{tv.length}</h2>
            <p>TV</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerStats;
