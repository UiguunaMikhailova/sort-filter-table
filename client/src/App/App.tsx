import React from 'react';
import Filter from '../Components/Filter/Filter';
import Sort from 'Components/Sort/Sort';
import Table from 'Components/Table/Table';
import './App.css';

function App() {
  return (
    <div className="app">
      <Filter />
      <Sort />
      <Table />
    </div>
  );
}

export default App;
