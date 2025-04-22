import { ICommonData } from "../common-data/commonDataType";

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

export interface IProductById {
  id: string;
  category_id?: string | undefined;
  brand_id?: string | undefined;
  product_name?: string;
  product_description?: string;
  main_image: string;
  main_image_type?: string;
  parcel_weight?: number;
  parcel_length?: number;
  parcel_width?: number;
  parcel_height?: number;
  payment_method?: string;
  product_source?: string;
  product_life?: string;
  pet_size?: string;
  type_of_pet?: string;
  // created_by: string;
  // created_at: string;
  // updated_by: string;
  // updated_at: string;
  // deleted_by: string | null;
  // deleted_at: string | null;
  // is_deleted: boolean;

  product_options?: IProductOption[];
  product_variants?: IProductVariant[];
  brand?: ICommonData;
  category?: ICommonData;
  product_images?: IProductImage[];
}

export interface IProductOption {
  id: string;
  name: string;
  product_option_values: IProductOptionValue[];
}

export interface IProductOptionValue {
  id: string;
  value: string;
}

export interface IProductVariant {
  id: string;
  sku_id: string;
  sku_custom_id: string;
  price_1: number;
  price_2: number;
  price_3: number;
  price_4: number;
  b2b: boolean;
  b2c: boolean;
  main_image: string;
  main_image_type: string;
  quantity: number;
  expiration_date: string | null;
  animal_food_registration_number: string;
  product_variant_option_values: IProductVariantOptionValue[];
}

export interface IProductVariantOptionValue {
  product_option_values: {
    id: string;
    option_id: string;
    value: string;
  };
}

export interface IProductImage {
  id: string;
  is_main: boolean;
  file_path: string;
  type: string;
  position: number;
  product_id: string;
  variant_id: string;
}
