export interface Room {
  id: string;
  name: string;
  price: number;
  description: string;
  capacity: number;
  image: string;
  amenities: string[];
  featured: boolean;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  guests: number;
}
