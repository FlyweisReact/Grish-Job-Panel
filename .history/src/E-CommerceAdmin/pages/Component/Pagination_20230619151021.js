/** @format */

import React, { useState, useEffect } from "react";

const Pagination = ({ query, TotolData , slicedData }) => {
  const [currentPage2, setCurrentPage2] = useState(1);
  const [postPerPage2] = useState(1);
  const lastPostIndex2 = currentPage2 * postPerPage2;
  const firstPostIndex2 = lastPostIndex2 - postPerPage2;
  let pages2 = [];

  useEffect(() => {
    if (query) {
      setCurrentPage2(1);
    }
  }, [query]);

   slicedData = TotolData?.slice(firstPostIndex2, lastPostIndex2);

  for (let i = 1; i <= Math.ceil(TotolData?.length / postPerPage2); i++) {
    pages2.push(i);
  }

  function Next() {
    setCurrentPage2(currentPage2 + 1);
  }

  function Prev() {
    if (currentPage2 !== 1) {
      setCurrentPage2(currentPage2 - 1);
    }
  }

  console.log("Props" , slicedData)
  return (
    <>
      <div className="pagination">
        <button onClick={() => Prev()} className="prevBtn">
          <i className="fa-solid fa-backward"></i>
        </button>
        {currentPage2 === 1 ? (
          ""
        ) : (
          <button onClick={() => setCurrentPage2(1)}>1</button>
        )}

        {pages2?.slice(currentPage2 - 1, currentPage2 + 3).map((i, index) =>
          i === pages2?.length ? (
            ""
          ) : (
            <button
              key={index}
              onClick={() => setCurrentPage2(i)}
              className={currentPage2 === i ? "activePage" : ""}
            >
              {" "}
              {i}{" "}
            </button>
          )
        )}

        <button
          onClick={() => setCurrentPage2(pages2?.length)}
          className={currentPage2 === pages2?.length ? "activePage" : ""}
        >
          {" "}
          {pages2?.length}{" "}
        </button>

        {currentPage2 === pages2?.length ? (
          ""
        ) : (
          <button onClick={() => Next()} className="nextBtn">
            {" "}
            <i className="fa-sharp fa-solid fa-forward"></i>
          </button>
        )}
      </div>
    </>
  );
};

export default Pagination;
