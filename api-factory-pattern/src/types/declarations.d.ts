export interface ApiUser {
  id: number;
  name: string;
  email: string;
}

declare function createApi<T>(baseUrl: string): {
  getAll: () => Promise<{ data: T[] }>;
  getOne: (id: number) => Promise<{ data: T }>;
};
