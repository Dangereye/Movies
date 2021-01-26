import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Rating = ({ data }) => {
  switch (Math.floor(data)) {
    case 1:
      return (
        <span className="rating">
          <BsStarHalf />
          <BsStar />
          <BsStar />
          <BsStar />
          <BsStar />
        </span>
      );
    case 2:
      return (
        <span className="rating">
          <BsStarFill />
          <BsStar />
          <BsStar />
          <BsStar />
          <BsStar />
        </span>
      );
    case 3:
      return (
        <span className="rating">
          <BsStarFill />
          <BsStarHalf />
          <BsStar />
          <BsStar />
          <BsStar />
        </span>
      );
    case 4:
      return (
        <span className="rating">
          <BsStarFill />
          <BsStarFill />
          <BsStar />
          <BsStar />
          <BsStar />
        </span>
      );
    case 5:
      return (
        <span className="rating">
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
          <BsStar />
          <BsStar />
        </span>
      );
    case 6:
      return (
        <span className="rating">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStar />
          <BsStar />
        </span>
      );
    case 7:
      return (
        <span className="rating">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
          <BsStar />
        </span>
      );
    case 8:
      return (
        <span className="rating">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStar />
        </span>
      );
    case 9:
      return (
        <span className="rating">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
        </span>
      );
    case 10:
      return (
        <span className="rating">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </span>
      );
    default:
      return null;
  }
};

export default Rating;
