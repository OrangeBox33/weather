export interface Coord {
  lat: number;
  lon: number;
}

export interface CoordName extends Coord {
  name: string;
}
