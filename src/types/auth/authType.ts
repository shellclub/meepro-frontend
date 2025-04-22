export interface UserRole {
  code: string;
  role_name: string;
}

export interface CustomerType {
  code: string;
  type_name: string;
  price_column: string;
}
export interface LoginResponse {
  data: {
    name: string;
    id: number;
    user_role: UserRole;
    email: string;
  };
  message: string;
  status: boolean;
  error: null;
}

export interface UserSession {
  name: string;
  id: number;
  user_role: UserRole;
  email: string;
  customer_type: CustomerType;
}
