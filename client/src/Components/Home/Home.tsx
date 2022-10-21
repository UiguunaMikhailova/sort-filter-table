import React, { useEffect, useState } from 'react';
import Table from 'Components/Table/Table';
import getData from 'Requests/Requests';
import './Home.css';
import { Item } from 'types/types';
import Form from 'Components/Form/Form';
import { sortItems } from 'Helpers/Helpers';

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

  function updateItems(sort: string, firstValue: string, secondValue: string, input: string) {
    setItems([...initialItems]);
    const filteredItems: never[] = [];
    filteredItems.push(...sortItems(sort, initialItems));
    filterItems(filteredItems, firstValue, secondValue, input);
  }

  function filterItems(itemsArr: never[], firstValue: string, secondValue: string, input: string) {
    if (secondValue === 'contains') {
      filterItemsContains(firstValue, itemsArr, input);
    }

    if (secondValue === 'equals') {
      filterItemsEquals(firstValue, itemsArr, input);
    }

    if (secondValue === 'more') {
      filterItemsMore(firstValue, itemsArr, input);
    }
    if (secondValue === 'less') {
      filterItemsLess(firstValue, itemsArr, input);
    }
  }

  function filterItemsContains(value: string, itemsArr: never[], input: string) {
    if (value === 'name') {
      setItems([
        ...itemsArr.filter((item: Item) => item.name.toLowerCase().includes(input.toLowerCase())),
      ]);
    }
    if (value === 'date') {
      setItems([
        ...itemsArr.filter((item: Item) => item.date.toLowerCase().includes(input.toLowerCase())),
      ]);
    }
    if (value === 'quantity') {
      setItems([
        ...itemsArr.filter((item: Item) =>
          item.quantity.toString().toLowerCase().includes(input.toLowerCase())
        ),
      ]);
    }
    if (value === 'distance') {
      setItems([
        ...itemsArr.filter((item: Item) =>
          item.distance.toString().toLowerCase().includes(input.toLowerCase())
        ),
      ]);
    }
  }

  function filterItemsEquals(value: string, itemsArr: never[], input: string) {
    if (value === 'name') {
      setItems([
        ...itemsArr.filter((item: Item) => item.name.toLowerCase() === input.toLowerCase()),
      ]);
    }
    if (value === 'date') {
      setItems([
        ...itemsArr.filter((item: Item) => item.date.toLowerCase() === input.toLowerCase()),
      ]);
    }
    if (value === 'quantity') {
      setItems([
        ...itemsArr.filter(
          (item: Item) => item.quantity.toString().toLowerCase() === input.toLowerCase()
        ),
      ]);
    }
    if (value === 'distance') {
      setItems([
        ...itemsArr.filter(
          (item: Item) => item.distance.toString().toLowerCase() === input.toLowerCase()
        ),
      ]);
    }
  }

  function filterItemsMore(value: string, itemsArr: never[], input: string) {
    if (value === 'name') {
      setItems([...itemsArr.filter((item: Item) => item.name.toLowerCase() > input.toLowerCase())]);
    }
    if (value === 'date') {
      setItems([
        ...itemsArr.filter((item: Item) => {
          return Date.parse(item.date) >= Date.parse(input);
        }),
      ]);
    }
    if (value === 'quantity') {
      setItems([...itemsArr.filter((item: Item) => item.quantity >= Number(input))]);
    }
    if (value === 'distance') {
      setItems([...itemsArr.filter((item: Item) => item.distance >= Number(input))]);
    }
  }

  function filterItemsLess(value: string, itemsArr: never[], input: string) {
    if (value === 'name') {
      setItems([...itemsArr.filter((item: Item) => item.name.toLowerCase() < input.toLowerCase())]);
    }
    if (value === 'date') {
      setItems([
        ...itemsArr.filter((item: Item) => {
          return Date.parse(item.date) <= Date.parse(input);
        }),
      ]);
    }
    if (value === 'quantity') {
      setItems([...itemsArr.filter((item: Item) => item.quantity <= Number(input))]);
    }
    if (value === 'distance') {
      setItems([...itemsArr.filter((item: Item) => item.distance <= Number(input))]);
    }
  }
  return (
    <div className="home">
      <Form updateItems={updateItems} />
      <Table items={items} />
    </div>
  );
}
