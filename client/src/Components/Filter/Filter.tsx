import React from 'react';
import './Filter.css';

export default function Filter() {
  return (
    <form className="filter">
      <span>Фильтрация: </span>
      <select className="select">
        <option value="date">По дате</option>
        <option value="name">По имени</option>
        <option value="quantity">По количеству</option>
        <option value="distance">По дистанции</option>
      </select>
      <select className="select">
        <option value="name-asc">Равно</option>
        <option value="name-desc">Содержит</option>
        <option value="quantity-asc">Больше</option>
        <option value="quantity-asc">Меньше</option>
      </select>
      <input className="input" type="text" placeholder="Введите текст..." />
      <button className="button" type="submit">
        Отфильтровать
      </button>
    </form>
  );
}
