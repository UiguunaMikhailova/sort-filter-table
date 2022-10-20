import React, { useRef, useState } from 'react';
import { SortProps } from 'types/types';
import './Sort.css';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Sort(props: SortProps) {
  const [value, setValue] = useState('');
  const select = useRef<HTMLSelectElement>(null);
  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    props.sortItems(value);
  }
  return (
    <form className="sort" onSubmit={(e) => submitHandler(e)}>
      <span>Сортировка: </span>
      <select className="select" ref={select} onChange={() => setValue(select.current!.value)}>
        <optgroup label="Название">
          <option value="name-asc">По возрастанию</option>
          <option value="name-desc">По убыванию</option>
        </optgroup>
        <optgroup label="Количество">
          <option value="quantity-asc">По возрастанию</option>
          <option value="quantity-desc">По убыванию</option>
        </optgroup>
        <optgroup label="Дистанция">
          <option value="distance-asc">По возрастанию</option>
          <option value="distance-desc">По убыванию</option>
        </optgroup>
      </select>
      <button className="button">Отсортировать</button>
    </form>
  );
}
