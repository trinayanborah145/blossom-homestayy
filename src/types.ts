export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  size: string;
  capacity: number;
  beds: string;
  services: string[];
  images: string[];
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Attraction {
  id: string;
  name: string;
  description: string;
  distance: string;
  image: string;
}

export interface Amenity {
  id: string;
  name: string;
  icon: string;
  description: string;
}
