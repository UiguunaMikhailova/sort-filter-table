import { Item } from 'types/types';

function sortItems(sort: string, initialItems: never[]) {
  const sortedItems: never[] = [];
  switch (sort) {
    case 'quantity-desc':
      sortedItems.push(...initialItems.sort((a: Item, b: Item) => b.quantity - a.quantity));
      break;
    case 'quantity-asc':
      sortedItems.push(...initialItems.sort((a: Item, b: Item) => a.quantity - b.quantity));
      break;
    case 'distance-desc':
      sortedItems.push(...initialItems.sort((a: Item, b: Item) => b.distance - a.distance));
      break;
    case 'distance-asc':
      sortedItems.push(...initialItems.sort((a: Item, b: Item) => a.distance - b.distance));
      break;
    case 'name-desc':
      sortedItems.push(
        ...initialItems.sort((a: Item, b: Item) => {
          if (a.name > b.name) return -1;
          if (a.name < b.name) return 1;
          return 0;
        })
      );
      break;
    case 'name-asc':
      sortedItems.push(
        ...initialItems.sort((a: Item, b: Item) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        })
      );
      break;
    default:
      sortedItems.push(...initialItems);
  }
  return sortedItems;
}

export { sortItems };
