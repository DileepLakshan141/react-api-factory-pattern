export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
}

export interface ResponseS<T> {
  data: T;
  message?: string;
}

export interface ResponseM<T> {
  data: T[];
  total: number;
}
