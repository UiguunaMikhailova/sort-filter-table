import Pagination from 'Components/Pagination/Pagination';
import TableItem from 'Components/TableItem/TableItem';
import React, { useState } from 'react';
import { TableProps } from 'types/types';
import './Table.css';

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
        {props.items.map((item, index) => {
          return (
            <TableItem
              key={index}
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
