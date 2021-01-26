export const categories = {
  movies: [
    { name: "Popular", endPoint: "/movie/popular" },
    { name: "Now Playing", endPoint: "/movie/now_playing" },
    { name: "Upcoming", endPoint: "/movie/upcoming" },
    { name: "Top Rated", endPoint: "/movie/top_rated", link: "/movies" },
  ],
  people: [{ name: "Popular", endPoint: "/person/popular" }],
  tv: [
    { name: "Popular", endPoint: "/tv/popular" },
    { name: "Top Rated", endPoint: "/tv/top_rated" },
    { name: "On Air", endPoint: "/tv/on_the_air" },
    { name: "Today", endPoint: "/tv/airing_today" },
  ],
};
