export interface ICreateUser {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  password: string;
  confirmPassword: string;
  role_id: number;
  customer_type_id: number;
  address_type: string;
  address: string;
  sub_district?: string;
  district?: string;
  province?: string;
  postal_code?: string;
  recipient_name?: string;
  recipient_phone?: string;
  is_primary?: boolean;
}

export interface ICreateUserB2B {
  store_name: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  password: string;
  confirmPassword: string;
  role_id: number;
  customer_type_id: number;
  attachment: IUserB2BAttachment[];
  address: IUserB2BAddress[];
}

export interface IUserB2BAttachment {
  file: File | null;
  description: string;
}
export interface IUserB2BAddress {
  address?: string;
  sub_district?: string;
  district?: string;
  province?: string;
  postal_code?: string;
  is_register?: boolean;
  is_contact?: boolean;
}

export interface IUserAddress {
  id: string;
  user_id: string;
  address_type?: string;
  address?: string;
  sub_district?: string;
  district?: string;
  province?: string;
  postal_code?: string;
  is_primary?: boolean;
  created_at?: string;
  updated_at?: string;
  recipient_name?: string;
  recipient_phone?: string;
  full_address?: string;
}

export interface IUserRole {
  code: string;
  role_name: string;
}

export interface IUserProfile {
  id: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  user_address?: IUserAddress[];
  user_role?: IUserRole;
}

export interface ICreateUserAddress {
  address_type: string;
  address: string;
  sub_district?: string;
  district?: string;
  province?: string;
  postal_code?: string;
  recipient_name?: string;
  recipient_phone?: string;
  is_primary?: boolean;
}

export interface IUser {
  id: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  user_address?: IUserAddress[];
  user_role?: IUserRole;
}
