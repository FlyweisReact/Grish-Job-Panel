/** @format */

import React, { useState } from "react";

const Pagination = () => {
  const [currentPage2, setCurrentPage2] = useState(1);
  const [postPerPage2] = useState(10);
  const lastPostIndex2 = currentPage2 * postPerPage2;
  const firstPostIndex2 = lastPostIndex2 - postPerPage2;
  return 
  
  
  ;
};

export default Pagination;
