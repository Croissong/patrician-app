export interface Inventory {
  date: number;
  items?: { [key: string]: Item };
}

export interface Item {
  buy: number;
  sell: number;
}

export const items = [
  { id: 1, name: 'beer' },
  { id: 2, name: 'bricks' },
  { id: 3, name: 'cloth' },
  { id: 4, name: 'fish' },
  { id: 5, name: 'grain' },
  { id: 6, name: 'hemp' },
  { id: 7, name: 'honey' },
  { id: 8, name: 'iron goods' },
  { id: 9, name: 'leather' },
  { id: 10, name: 'meat' },
  { id: 11, name: 'pig iron' },
  { id: 12, name: 'pitch' },
  { id: 13, name: 'pottery' },
  { id: 14, name: 'salt' },
  { id: 15, name: 'skins' },
  { id: 16, name: 'spices' },
  { id: 17, name: 'timber' },
  { id: 18, name: 'whale oil' },
  { id: 19, name: 'wine' },
  { id: 20, name: 'wool' }
];
