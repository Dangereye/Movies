import React from "react";
import { useHistory } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const PreviousPage = () => {
  let history = useHistory();
  return (
    <div className="history-previous-page">
      <div className="container">
        <button
          className="history-previous-page"
          onClick={() => history.goBack()}
        >
          <IoIosArrowBack />
          <span>Back</span>
        </button>
      </div>
    </div>
  );
};

export default PreviousPage;
