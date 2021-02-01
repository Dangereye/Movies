import React, { useState, createContext } from "react";
import { categories } from "../data/categories";

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  return (
    <MovieContext.Provider
      value={{
        categories,
        page,
        setPage,
        pages,
        setPages,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
