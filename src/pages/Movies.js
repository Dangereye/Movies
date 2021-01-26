import React, { useContext } from "react";
import DesktopCategories from "../components/shared/DesktopCategories";
import GridListPage from "../components/shared/GridListPage";
import { MovieContext } from "../contexts/MovieContext";

const Movies = () => {
  const { category, setCategory, categories, setPage } = useContext(
    MovieContext
  );
  return (
    <>
      <DesktopCategories
        categories={categories.movies}
        setCategory={setCategory}
        setPage={setPage}
      />
      <GridListPage
        title={`${category.name} Movies`}
        endPoint={category.endPoint}
        context={MovieContext}
      />
    </>
  );
};

export default Movies;
