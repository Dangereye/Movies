import React, { useState, createContext } from "react";
import { categories } from "../data/categories";
export const PeopleContext = createContext();

const PeopleContextProvider = ({ children }) => {
  const [category, setCategory] = useState(categories.people[0]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [biography, setBiography] = useState("");

  return (
    <PeopleContext.Provider
      value={{
        category,
        setCategory,
        categories,
        page,
        setPage,
        pages,
        setPages,
        biography,
        setBiography,
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
};

export default PeopleContextProvider;
