import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import { useQuery } from "react-query";
import { fetchData } from "../../api/FetchData";
import { MdLocalMovies } from "react-icons/md";
import { CgScreen } from "react-icons/cg";
import { ImUser } from "react-icons/im";
import { BiLoaderAlt } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import SearchResult from "./SearchResult";

const SearchBar = ({ open, toggle }) => {
  const history = useHistory();
  const [query, setQuery] = useState("");
  const [isQuery, setIsQuery] = useState(false);
  const apiKey = process.env.REACT_APP_KEY;
  const page = 1;
  const search = useQuery(
    ["Search query", query],
    () =>
      fetchData(
        `/search/multi?api_key=${apiKey}&language=en&query=${query}&page=${page}&include_adult=false`
      ).then(setIsQuery(false)),
    { enabled: isQuery }
  );

  const handleClick = () => {
    setQuery("");
    toggle(!open);
  };

  useEffect(() => {
    if (query !== "") {
      const makeRequest = setTimeout(setIsQuery(true), 500);

      return () => {
        clearTimeout(makeRequest);
      };
    }
  }, [query]);
  return (
    <>
      <div className="search-bar">
        <div className="container">
          <form onSubmit={(e) => history.push(`/search?query=${query}`)}>
            {search.isLoading ? (
              <BiLoaderAlt className="spinner" />
            ) : (
              <ImSearch />
            )}
            <input
              type="text"
              value={query}
              placeholder="Search for a movie, tv show or person.."
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="close-search" onClick={handleClick}>
              <VscChromeClose />
            </div>
          </form>
        </div>
      </div>
      <div className="results">
        <div className="container">
          {search.isSuccess &&
            search.data.results
              .sort((a, b) => {
                const aDate = new Date(
                  a.first_air_date ? a.first_air_date : a.release_date
                );
                const bDate = new Date(
                  b.first_air_date ? b.first_air_date : b.release_date
                );
                return bDate - aDate;
              })
              .map((result, index) => {
                return (
                  <>
                    {result.media_type === "tv" && (
                      <SearchResult
                        key={`tv-${index}`}
                        path={`/tv-show/${result.id}`}
                        icon={<CgScreen />}
                        name={result.name}
                        department={null}
                        date={result.first_air_date}
                        handleClick={handleClick}
                      />
                    )}
                    {result.media_type === "person" && (
                      <SearchResult
                        key={`person-${index}`}
                        path={`/person/${result.id}`}
                        icon={<ImUser />}
                        name={result.name}
                        department={result.known_for_department}
                        date={null}
                        handleClick={handleClick}
                      />
                    )}
                    {result.media_type === "movie" && (
                      <SearchResult
                        key={`movie-${index}`}
                        path={`/movie/${result.id}`}
                        icon={<MdLocalMovies />}
                        name={result.title}
                        department={null}
                        date={result.release_date}
                        handleClick={handleClick}
                      />
                    )}
                  </>
                );
              })}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
