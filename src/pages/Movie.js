import React, { useContext } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchData } from "../api/FetchData";
import { MovieContext } from "../contexts/MovieContext";
import DataStatus from "../components/shared/DataStatus";
import HistoryPreviousPage from "../components/shared/HistoryPreviousPage";
import MovieHeader from "../components/movies/MovieHeader";
import VideoList from "../components/shared/VideoList";
import Providers from "../components/movies/Providers";
import GridList from "../components/shared/GridList";
import Pagination from "../components/shared/Pagination";

const Movie = () => {
  const apiKey = process.env.REACT_APP_KEY;
  const { id } = useParams();
  const { page, setPage, pages, setPages } = useContext(MovieContext);

  const movieDetails = useQuery(["movieDetails", id], () =>
    fetchData(`/movie/${id}?api_key=${apiKey}&language=en`)
  );
  const movieVideos = useQuery(["movieVideos", id], () =>
    fetchData(`/movie/${id}/videos?api_key=${apiKey}&language=en`)
  );
  const movieCredits = useQuery(["movieCredits", id], () =>
    fetchData(`/movie/${id}/credits?api_key=${apiKey}&language=en`)
  );
  const movieSimilar = useQuery(["movieSimilar", id, page], () =>
    fetchData(`/movie/${id}/similar?api_key=${apiKey}&language=en&page=${page}`)
  );

  if (
    movieDetails.isLoading ||
    movieVideos.isLoading ||
    movieCredits.isLoading ||
    movieSimilar.isLoading
  ) {
    return <DataStatus text="Just a moment.." />;
  }

  if (
    movieDetails.isError ||
    movieVideos.isError ||
    movieCredits.isError ||
    movieSimilar.isError
  ) {
    return (
      <DataStatus text="Oops! Something went wrong. Refresh the page, or try again later." />
    );
  }

  if (
    movieDetails.isSuccess &&
    movieVideos.isSuccess &&
    movieCredits.isSuccess &&
    movieSimilar.isSuccess
  ) {
    return (
      <>
        <HistoryPreviousPage />
        <MovieHeader details={movieDetails.data} credits={movieCredits.data} />
        <VideoList
          title="Videos"
          videos={movieVideos.data.results}
          totalResults={null}
        />
        <Providers />
        <GridList
          title="Cast members"
          list={movieCredits.data.cast}
          path="/person"
          totalResults={movieCredits.data.total_results}
        />
        <GridList
          title="Similar movies"
          list={movieSimilar.data.results}
          path="/movie"
          totalResults={movieSimilar.data.total_results}
        />
        <Pagination
          page={page}
          setPage={setPage}
          pages={pages}
          setPages={setPages}
          totalPages={movieSimilar.data.total_pages}
        />
      </>
    );
  }
};

export default Movie;
