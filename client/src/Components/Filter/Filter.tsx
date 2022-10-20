import React, { useRef, useState } from 'react';
import { FilterProps } from 'types/types';
import './Filter.css';

export default function Filter(props: FilterProps) {
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [inputValue, setInput] = useState('');
  const firstSelect = useRef<HTMLSelectElement>(null);
  const secondSelect = useRef<HTMLSelectElement>(null);
  const inputText = useRef<HTMLInputElement>(null);
  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    props.filterItems(firstValue, secondValue, inputValue);
  }
  return (
    <form className="filter" onSubmit={(e) => submitHandler(e)}>
      <span>Фильтрация: </span>
      <select
        className="select"
        ref={firstSelect}
        onChange={() => setFirstValue(firstSelect.current!.value)}
      >
        <option value="date">По дате</option>
        <option value="name">По имени</option>
        <option value="quantity">По количеству</option>
        <option value="distance">По дистанции</option>
      </select>
      <select
        className="select"
        ref={secondSelect}
        onChange={() => setSecondValue(secondSelect.current!.value)}
      >
        <option value="equals">Равно</option>
        <option value="contains">Содержит</option>
        <option value="more">Больше</option>
        <option value="less">Меньше</option>
      </select>
      <input
        className="input"
        type="text"
        placeholder="Введите текст..."
        ref={inputText}
        onChange={() => setInput(inputText.current!.value)}
      />
      <button className="button" type="submit">
        Отфильтровать
      </button>
    </form>
  );
}
