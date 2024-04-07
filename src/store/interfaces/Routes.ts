export type Routes = {
  id?: string;
  title?: string;
  image?: string[];
  description?: string;
  caption?: string;
  tags?: string[];
  city?: string;
  days_count?: string;
  location_count?: string;
  createdAt?: Date;
  updatedAt?: Date;
  points: Point[];
  likes?: any[];
};

export type Point = {
  id: string;
  type: string;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  attachments: string[];
  preview_image: string;
  address: string;
  day_number: number;
  order_number: number;
  routeId: string;
  createdAt: Date;
  updatedAt: Date;
};
