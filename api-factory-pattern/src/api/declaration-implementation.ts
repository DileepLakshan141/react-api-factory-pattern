import axios from "axios";

export function createApi<T>(baseUrl: string) {
  return {
    getAll: async () => {
      const response = await axios.get(baseUrl);
      return { data: response.data as T[] };
    },

    getOne: async (id: number) => {
      const response = await axios.get(`${baseUrl}/${id}`);
      return { data: response.data as T };
    },
  };
}

export default createApi as typeof import("../types/declarations").createApi;
