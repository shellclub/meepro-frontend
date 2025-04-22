export interface IProduct {
  category: string;
  sale: string;
  image: string;
  imageTwo: string;
  newPrice: number;
  oldPrice: number;
  href: string;
  title: string;
  waight: string;
  rating: any;
  status: string;
  location: string;
  brand: string;
  sku: number;
  quantity: number;
  id: number;
}

export interface IProductSearch {
  limit?: number;
  category_id?: string;
  order?: "asc" | "desc";
  order_field?: string;
}
