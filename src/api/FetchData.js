export const fetchData = async (endPoint) => {
  const apiKey = process.env.REACT_APP_KEY;
  const res = await fetch(
    `https://api.themoviedb.org/3${endPoint}?api_key=${apiKey}&language=en&page=1`
  );
  return res.json();
};
