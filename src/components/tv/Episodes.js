import React from "react";
import ItemImage from "../shared/ItemImage";
import Overview from "../shared/Overview";
import StarRating from "../shared/StarRating";

const Episodes = ({ details }) => {
  return (
    <section>
      <div className="container">
        <h2>Episodes</h2>
        <div className="episodes">
          {details.episodes.map((episode, index) => {
            return (
              <div className="episode" key={`Episode${index}`}>
                <div className="image">
                  <ItemImage
                    image={episode.still_path}
                    name={episode.name}
                    width="300px"
                    height="168px"
                    landscape={true}
                  />
                </div>
                <div className="details">
                  <h2>{`${episode.episode_number}. ${episode.name}`}</h2>
                  <Overview data={episode.overview} />
                  <div className="py1">
                    <StarRating data={episode.vote_average} />
                    <span>{episode.vote_count} votes.</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Episodes;
