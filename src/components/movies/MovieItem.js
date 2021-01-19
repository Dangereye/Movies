import React from "react";
import { Link } from "react-router-dom";
import ItemImage from "../shared/ItemImage";
import Year from "../shared/Year";

const ListItem = ({ data }) => {
  return (
    <div className="list-item">
      <Link to={`/movies/${data.id}`}>
        <ItemImage image={data.poster_path} name={data.title} />
      </Link>
      <div className="content">
        <h3 className="item-title">{data.title}</h3>
        <Year date={data.release_date} />
      </div>
    </div>
  );
};

export default ListItem;
