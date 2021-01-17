import React from "react";

const Pagination = ({ page, setPage, pages }) => {
  const prevPage = () => {
    if (page > 1) {
      setPage((page) => page - 1);
    }
  };

  const nextPage = () => {
    if (page < pages + 1) {
      setPage((page) => page + 1);
    }
  };

  return (
    <div id="pagination">
      <p>
        Page {page} of {pages}
      </p>
      <div className="buttons">
        <button className="pagination" onClick={prevPage}>
          Previous
        </button>
        <button className="pagination" onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
