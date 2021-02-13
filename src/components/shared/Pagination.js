import React from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const Pagination = ({ page, setPage, totalPages }) => {
  const beforePage = page - 1;
  const afterPage = page + 1;

  return (
    <div id="pagination">
      <div className="buttons">
        {page > 1 && (
          <button className="pagination-prev" onClick={() => setPage(page - 1)}>
            <IoIosArrowRoundBack />
            <span>Prev</span>
          </button>
        )}
        {page > 2 && <div onClick={() => setPage(1)}>1</div>}
        {page > 3 && <span>...</span>}
        {beforePage > 0 && (
          <div onClick={() => setPage(page - 1)}>{beforePage}</div>
        )}
        <div className={"active"}>{page}</div>
        {afterPage < totalPages && (
          <div onClick={() => setPage(page + 1)}>{afterPage}</div>
        )}
        {page < totalPages - 2 && <span>...</span>}
        {page < totalPages && (
          <div onClick={() => setPage(totalPages)}>{totalPages}</div>
        )}
        {page < totalPages && (
          <button className="pagination-next" onClick={() => setPage(page + 1)}>
            <span>Next</span>
            <IoIosArrowRoundForward />
          </button>
        )}
      </div>
    </div>
  );
};

export default React.memo(Pagination);
