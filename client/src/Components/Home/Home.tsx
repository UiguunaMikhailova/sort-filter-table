import React, { SetStateAction, useEffect, useState } from 'react';
import Sort from 'Components/Sort/Sort';
import Filter from 'Components/Filter/Filter';
import Table from 'Components/Table/Table';
import getData from 'Requests/Requests';
import './Home.css';
import { Item } from 'types/types';

export default function Home() {
  const [items, setItems] = useState([]);
  // const initialItems = [...items];

  useEffect(() => {
    updateItems();
  });

  function updateItems() {
    if (items.length) {
      setItems(items);
    } else {
      getData().then((data) => {
        if (data) {
          setItems(data);
        }
      });
    }
  }

  function sortItems(value: string) {
    switch (value) {
      case 'quantity-desc':
        setItems([...items.sort((a: Item, b: Item) => b.quantity - a.quantity)]);
        break;
      case 'quantity-asc':
        setItems([...items.sort((a: Item, b: Item) => a.quantity - b.quantity)]);
        break;
      case 'distance-desc':
        setItems([...items.sort((a: Item, b: Item) => b.distance - a.distance)]);
        break;
      case 'distance-asc':
        setItems([...items.sort((a: Item, b: Item) => a.distance - b.distance)]);
        break;
      case 'name-desc':
        setItems([
          ...items.sort((a: Item, b: Item) => {
            if (a.name > b.name) return -1;
            if (a.name < b.name) return 1;
            return 0;
          }),
        ]);
        break;
      case 'name-asc':
        setItems([
          ...items.sort((a: Item, b: Item) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          }),
        ]);
        break;
      default:
        setItems(items);
    }
  }

  function filterItems(firstValue: string, secondValue: string, input: string) {
    // if (secondValue === 'contains') {
    //   if (firstValue === 'name') {
    //     setItems([
    //       ...initialItems.filter((item: Item) =>
    //         item.name.toLowerCase().includes(input.toLowerCase())
    //       ),
    //     ]);
    //   }
    //   if (firstValue === 'date') {
    //     setItems([
    //       ...initialItems.filter((item: Item) =>
    //         item.date.toLowerCase().includes(input.toLowerCase())
    //       ),
    //     ]);
    //   }
  }
    // const filteredArr = items.filter((item: Item) => item.name.toLowerCase().includes(input.toLowerCase()));
    // setItems([...items.filter((item: Item) => item.name.toLowerCase().includes(input.toLowerCase()))]);
    // console.log(firstValue, secondValue, input);

  return (
    <div className="home">
      <Filter filterItems={filterItems} />
      <Sort sortItems={sortItems} />
      <Table items={items} />
    </div>
  );
}
