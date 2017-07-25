export class Town {
  constructor(public id: string, public name: string) {
  }
}

export const towns: { [key: string]: Town } = {
  1: new Town('1', 'Lübeck'),
  2: new Town('2', 'Reval'),
  3: new Town('3', 'Malmö')
};
