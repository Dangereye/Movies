import React, { useContext } from "react";
import GridListPage from "../components/shared/GridListPage";
import { PeopleContext } from "../contexts/PeopleContext";

const People = () => {
  const { category } = useContext(PeopleContext);
  return (
    <>
      <GridListPage
        title={`${category.name} People`}
        endPoint={category.endPoint}
        context={PeopleContext}
      />
    </>
  );
};

export default People;
