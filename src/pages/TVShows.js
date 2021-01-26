import React, { useContext } from "react";
import DesktopCategories from "../components/shared/DesktopCategories";
import GridListPage from "../components/shared/GridListPage";
import { TVContext } from "../contexts/TVContext";

const TVShows = () => {
  const { category, setCategory, categories, setPage } = useContext(TVContext);
  return (
    <>
      <DesktopCategories
        categories={categories.tv}
        setCategory={setCategory}
        setPage={setPage}
      />
      <GridListPage
        title={`${category.name} TV`}
        endPoint={category.endPoint}
        context={TVContext}
      />
    </>
  );
};

export default TVShows;
