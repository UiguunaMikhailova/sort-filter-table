type Item = {
  date: string;
  name: string;
  quantity: number;
  distance: number;
};

type TableProps = {
  items: Item[];
};

type SortProps = {
  sortItems: (value: string) => void;
};

type FilterProps = {
  filterItems: (value: string, secondValue: string, inputText: string) => void;
};

export { Item, TableProps, SortProps, FilterProps };
