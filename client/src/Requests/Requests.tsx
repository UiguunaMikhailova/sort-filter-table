export default async function getData(page = 1, limit = 7) {
  const res = await fetch(`http://localhost:5000/api/items?page=${page}&limit=${limit}`);
  const data = await res.json();
  return data.rows;
}
