export class Inventory {
  date: number;
  items: { [key: string]: Item }
}

export interface Item {
  buy: number;
  sell: number;
}

export const items = [
  { id: 1, name: 'Iron' }
]
