export const fetchList = async (endPoint, page) => {
  const apiKey = process.env.REACT_APP_KEY;
  const res = await fetch(
    `https://api.themoviedb.org/3${endPoint}?api_key=${apiKey}&language=en&page=${page}`
  );
  return res.json();
};

export const fetchItem = async (endPoint) => {
  const apiKey = process.env.REACT_APP_KEY;
  const res = await fetch(
    `https://api.themoviedb.org/3${endPoint}?api_key=${apiKey}&language=en`
  );
  return res.json();
};
