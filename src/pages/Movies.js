import React, { useContext } from "react";
import DesktopCategories from "../components/DesktopCategories";
import ItemsList from "../components/ItemsList";
import { MovieContext } from "../contexts/MovieContext";

const Movies = () => {
  const movieContext = useContext(MovieContext);
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
      <ItemsList
        title={`${category.name} Movies`}
        endPoint={category.endPoint}
        context={movieContext}
      />
    </>
  );
};

export default Movies;
