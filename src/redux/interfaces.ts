export interface Tour {
  id: number;
  name: string;
  description: string;
  priceRange: string;
  numOfDays: number;
  coverImage: string;
}

export interface BookedToursState {
  tours: Tour[];
}
