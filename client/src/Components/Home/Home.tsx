import React, { useEffect, useState } from 'react';
import Table from 'Components/Table/Table';
import getData from 'Requests/Requests';
import './Home.css';
import { Item } from 'types/types';
import Form from 'Components/Form/Form';

export default function Home() {
  const [items, setItems] = useState([]);
  const [initialItems, setInitialItems] = useState([]);

  useEffect(() => {
    getItems();
  });

  function getItems() {
    if (items.length) {
      setItems(items);
    } else {
      getData().then((data) => {
        if (data) {
          setItems(data);
          setInitialItems(data);
        }
      });
    }
  }

  function sortItems(sort: string) {
    const sortedItems: never[] = [];
    switch (sort) {
      case 'quantity-desc':
        sortedItems.push(...initialItems.sort((a: Item, b: Item) => b.quantity - a.quantity));
        break;
      case 'quantity-asc':
        sortedItems.push(...initialItems.sort((a: Item, b: Item) => a.quantity - b.quantity));
        break;
      case 'distance-desc':
        sortedItems.push(...initialItems.sort((a: Item, b: Item) => b.distance - a.distance));
        break;
      case 'distance-asc':
        sortedItems.push(...initialItems.sort((a: Item, b: Item) => a.distance - b.distance));
        break;
      case 'name-desc':
        sortedItems.push(
          ...initialItems.sort((a: Item, b: Item) => {
            if (a.name > b.name) return -1;
            if (a.name < b.name) return 1;
            return 0;
          })
        );
        break;
      case 'name-asc':
        sortedItems.push(
          ...initialItems.sort((a: Item, b: Item) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          })
        );
        break;
      default:
        sortedItems.push(...initialItems);
    }
    return sortedItems;
  }

  function updateItems(sort: string, firstValue: string, secondValue: string, input: string) {
    console.log(sort, firstValue, secondValue, input);
    setItems([...initialItems]);
    const filteredItems: never[] = [];
    filteredItems.push(...sortItems(sort));

    filterItems(filteredItems, firstValue, secondValue, input);
  }

  function filterItems(itemsArr: never[], firstValue: string, secondValue: string, input: string) {
    if (secondValue === 'contains') {
      if (firstValue === 'name') {
        setItems([
          ...itemsArr.filter((item: Item) => item.name.toLowerCase().includes(input.toLowerCase())),
        ]);
      }
      if (firstValue === 'date') {
        setItems([
          ...itemsArr.filter((item: Item) => item.date.toLowerCase().includes(input.toLowerCase())),
        ]);
      }
    }
  }

  return (
    <div className="home">
      <Form updateItems={updateItems} />
      <Table items={items} />
    </div>
  );
}
