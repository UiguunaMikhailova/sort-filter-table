import React from 'react';
import './Sort.css';

type SortProps = {
  updateItems: () => void;
};

export default function Sort(props: SortProps) {
  return (
    <div className="sort">
      <span>Сортировка: </span>
      <select className="select" onChange={() => props.updateItems()}>
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
    </div>
  );
}
