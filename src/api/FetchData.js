export const fetchData = async (params) => {
  const res = await fetch(`https://api.themoviedb.org/3${params}`);
  if (!res.ok) throw new Error();
  return res.json();
};
