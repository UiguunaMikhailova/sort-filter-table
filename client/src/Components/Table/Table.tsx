import Pagination from 'Components/Pagination/Pagination';
import TableItem from 'Components/TableItem/TableItem';
import React, { useState } from 'react';
import './Table.css';

type Item = {
  date: string;
  name: string;
  quantity: number;
  distance: number;
  id: number;
};

type TableProps = {
  items: Item[];
};

export default function Table(props: TableProps) {
  return (
    <>
      <table className="table">
        <tr className="table__item">
          <th className="table__item-title">Дата</th>
          <th className="table__item-title">Название</th>
          <th className="table__item-title">Количество</th>
          <th className="table__item-title">Дистанция</th>
        </tr>
        {props.items.map((item) => {
          return (
            <TableItem
              key={item.id}
              date={item.date}
              name={item.name}
              quantity={item.quantity}
              distance={item.distance}
            />
          );
        })}
      </table>
      <Pagination />
    </>
  );
}
