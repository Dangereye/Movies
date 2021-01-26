import React, { createContext, useState } from "react";
import { categories } from "../data/categories";

export const TVContext = createContext();

const TVContextProvider = ({ children }) => {
  const [category, setCategory] = useState(categories.tv[0]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  return (
    <TVContext.Provider
      value={{
        category,
        setCategory,
        categories,
        page,
        setPage,
        pages,
        setPages,
      }}
    >
      {children}
    </TVContext.Provider>
  );
};

export default TVContextProvider;
