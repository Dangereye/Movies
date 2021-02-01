import React, { useEffect } from "react";

const Pagination = ({ page, setPage, pages, setPages, totalPages }) => {
  const prevPage = () => {
    if (page > 1) {
      setPage((page) => page - 1);
    }
  };

  const nextPage = () => {
    if (page < pages) {
      setPage((page) => page + 1);
    }
  };
  useEffect(() => {
    setPages(totalPages);
  });

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
