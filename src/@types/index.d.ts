type Id = string;

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
