import React, { useEffect, useState } from 'react';
import Filter from 'Components/Sort/Sort';
import Sort from 'Components/Filter/Filter';
import Table from 'Components/Table/Table';
import getData from 'Requests/Requests';
import './Home.css';

export default function Home() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    updateItems();
  }, []);
  function updateItems() {
    setItems([]);
    getData().then((data) => {
      if (data) {
        setItems(data);
      }
    });
  }
  return (
    <div className="home">
      <Filter updateItems={updateItems} />
      <Sort />
      <Table items={items} />
    </div>
  );
}
