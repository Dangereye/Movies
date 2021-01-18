import React, { useState, createContext } from "react";

export const PeopleContext = createContext();

const PeopleContextProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  return (
    <PeopleContext.Provider value={{ page, setPage, pages, setPages }}>
      {children}
    </PeopleContext.Provider>
  );
};

export default PeopleContextProvider;
