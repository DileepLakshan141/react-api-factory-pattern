import axios from "axios";
import type { ResponseM, ResponseS, User, Post } from "../types/api.types";

export function createApiClient<T>(baseUrl: string) {
  return {
    getAll: async (): Promise<ResponseM<T>> => {
      const response = await axios.get(baseUrl);
      return {
        data: response.data,
        total: response.data.length,
      };
    },

    getOne: async (id: number): Promise<ResponseS<T>> => {
      const response = await axios.get(`${baseUrl}/${id}`);
      return {
        data: response.data,
      };
    },
  };
}

export const userApi = createApiClient<User>(
  "https://jsonplaceholder.typicode.com/users"
);
export const postApi = createApiClient<Post>(
  "https://jsonplaceholder.typicode.com/posts"
);
