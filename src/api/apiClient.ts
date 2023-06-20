import axios from "axios";
import { type Character, type ApiData } from "types";

const apiClient = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const getAll = async () => {
  const response = await apiClient.get<ApiData>(`/character`);
  return response.data;
};

const getByID = async (id: string) => {
  const response = await apiClient.get<Character>(`/character/${id}`);
  return response.data;
};

const ApiService = { getAll, getByID };

export default ApiService;
