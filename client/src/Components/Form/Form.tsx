import Filter from 'Components/Filter/Filter';
import Sort from 'Components/Sort/Sort';
import React, { useState } from 'react';
import { FormProps } from 'types/types';

export default function Form(props: FormProps) {
  const [sort, setSort] = useState('');
  const [selectFirst, setSelectFirst] = useState('');
  const [selectSecond, setSelectSecond] = useState('');
  const [input, setInput] = useState('');
  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    props.updateItems(sort, selectFirst, selectSecond, input);
  }
  function setSortValue(sort: string) {
    setSort(sort);
  }
  function setFilterValues(firstValue: string, secondValue: string, inputValue: string) {
    setSelectFirst(firstValue);
    setSelectSecond(secondValue);
    setInput(inputValue);
  }
  return (
    <form className="filter" onSubmit={(e) => submitHandler(e)}>
      <Filter setFilterValues={setFilterValues} />
      <Sort setSortValue={setSortValue} />
      <button className="button" type="submit">
        Применить
      </button>
    </form>
  );
}
