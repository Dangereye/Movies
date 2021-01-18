import React, { useContext } from "react";
import ItemsList from "../components/ItemsList";
import { PeopleContext } from "../contexts/PeopleContext";

const People = () => {
  const peopleContext = useContext(PeopleContext);
  return (
    <>
      <ItemsList
        title="Popular People"
        endPoint="/person/popular"
        context={peopleContext}
      />
    </>
  );
};

export default People;
