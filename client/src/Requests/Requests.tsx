export default async function getData() {
  const res = await fetch('http://localhost:5000/api/items');
  const data = await res.json();
  return data;
}
