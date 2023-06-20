import axios from "axios";
import { type Character, type ApiData } from "types";

const apiClient = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const getAll = async (page = 1) => {
  const response = await apiClient.get<ApiData>(`/character?page=${page}`);
  return response.data;
};

const getByID = async (id: string) => {
  const response = await apiClient.get<Character>(`/character/${id}`);
  return response.data;
};

const searchByName = async (name: string) => {
  const response = await apiClient.get<Character>(`/character/?name=${name}`);
  return response.data;
};

const ApiService = { getAll, getByID, searchByName };

export default ApiService;
