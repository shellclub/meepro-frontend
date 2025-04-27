export interface ICreateUser {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  password: string;
  confirmPassword: string;
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
