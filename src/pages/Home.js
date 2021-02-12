import React from "react";
import { useQuery } from "react-query";
import { fetchData } from "../api/FetchData";
import HomeHeader from "../components/home/HomeHeader";
import GridList from "../components/shared/GridList";
import DataStatus from "../components/shared/DataStatus";

const Home = () => {
  const apiKey = process.env.REACT_APP_KEY;
  const trendingMovies = useQuery("trendingMovies", () =>
    fetchData(`/trending/movie/week?api_key=${apiKey}`)
  );
  const trendingTvShows = useQuery("trendingTvShows", () =>
    fetchData(`/trending/tv/week?api_key=${apiKey}`)
  );
  const trendingPeople = useQuery("trendingPeople", () =>
    fetchData(`/trending/person/week?api_key=${apiKey}`)
  );
  if (
    trendingMovies.isLoading ||
    trendingTvShows.isLoading ||
    trendingPeople.isLoading
  ) {
    return <DataStatus text="Just a moment.." />;
  }
  if (
    trendingMovies.isError ||
    trendingTvShows.isError ||
    trendingPeople.isError
  ) {
    return (
      <DataStatus text="Oops! Something went wrong. Refresh the page, or try again later." />
    );
  }

  if (
    trendingMovies.isSuccess ||
    trendingTvShows.isSuccess ||
    trendingPeople.isSuccess
  ) {
    return (
      <>
        <HomeHeader background={trendingMovies.data.results[0].backdrop_path} />
        <GridList
          title="Movies trending this week."
          list={trendingMovies.data.results}
          path="/movie"
          totalResults={trendingMovies.data.total_results}
        />
        <GridList
          title="TV shows trending this week."
          list={trendingTvShows.data.results}
          path="/tv-show"
          totalResults={trendingTvShows.data.total_results}
          color="#fff"
        />
        <GridList
          title="People trending this week."
          list={trendingPeople.data.results}
          path="/person"
          totalResults={trendingPeople.data.total_results}
        />
      </>
    );
  }
};

export default Home;
