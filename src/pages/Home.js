import React from "react";
import { useQuery } from "react-query";
import { fetchData } from "../api/FetchData";
import DataStatus from "../components/shared/DataStatus";

const Home = () => {
  const apiKey = process.env.REACT_APP_KEY;
  const latestMovie = useQuery("latestMovie", () =>
    fetchData(`/movie/latest?api_key=${apiKey}&language=en-US`)
  );
  if (latestMovie.isLoading) {
    return <DataStatus text="Just a moment.." />;
  }
  if (latestMovie.isError) {
    return (
      <DataStatus text="Oops! Something went wrong. Refresh the page, or try again later." />
    );
  }

  if (latestMovie.isSuccess) {
    return (
      <>
        <h1>Home</h1>
      </>
    );
  }
};

export default Home;
