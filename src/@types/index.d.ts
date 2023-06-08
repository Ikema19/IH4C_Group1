export type Id = string;

export type Primitive =
  | number
  | string
  | boolean
  | bigint
  | symbol
  | undefined
  | null;
export type DeepReadonly<T> = T extends Primitive
  ? { readonly [K in keyof T]: T[K] }
  : { readonly [K in keyof T]: DeepReadonly<T[K]> };

type SpotGeometry = {
  location: {
    lat: number;
    lng: number;
  };
};

export type Spot = {
  id: Id;
  name: string;
  description: string;
  photo: string;
  geometry: SpotGeometry;
};

export type Course = {
  id: Id;
  route: Spot[];
};
