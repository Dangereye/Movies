import React from "react";
import { Link } from "react-router-dom";
import ItemImage from "../shared/ItemImage";

const PersonItem = ({ data }) => {
  return (
    <div className="list-item">
      <Link to={`/person/${data.id}`}>
        <ItemImage image={data.profile_path} name={data.name} />
      </Link>
      <div className="content">
        <h3 className="item-title">{data.name}</h3>
      </div>
    </div>
  );
};

export default PersonItem;
