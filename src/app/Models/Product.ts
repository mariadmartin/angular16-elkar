export class Product {
  id: number;
  name: string;
  description: string;
  brand: string;
  gender: string;
  category: string;
  size: number[];
  color: string[];
  price: number;
  discountPrice?: number;
  is_in_invertory: boolean;
  items_left: number;
  imageUrl: string;
}
