import axios from "axios";
import type { User } from "../types/api.types";

export async function getUsers(): Promise<User[]> {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
}

export async function getUserById(id: number): Promise<User> {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}
