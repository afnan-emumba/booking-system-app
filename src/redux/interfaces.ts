interface User {
  name: string;
  email: string;
  phone: string;
  adults: number;
  children: number;
  paymentMethod: string;
}

interface Included {
  deptLocation: string;
  return: string;
  features: string[];
}

interface Itinerary {
  day: number;
  weather: number;
  schedule: string[];
}

export interface Tour {
  id: number;
  name: string;
  description: string;
  city: string;
  priceRange: string;
  numOfDays: number;
  coverImage: string;
  images: string[];
  startDate: string;
  endDate: string;
  included: Included;
  itinerary: Itinerary[];
  user: User;
}

export interface BookedToursState {
  tours: Tour[];
}
