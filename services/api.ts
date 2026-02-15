import Constants from "expo-constants";
import { Person } from "../types/common";

const BASE_URL = Constants.expoConfig?.extra?.apiBaseUrl;

export const getPeople = async (page: number = 1) => {
  const response = await fetch(`${BASE_URL}/people/?page=${page}`);
  if (!response.ok) {
    throw new Error('Failed to fetch people');
  }
  return response.json();
}

export const createPerson = async (person: Partial<Person>): Promise<void> => {
  await fetch(`${BASE_URL}/people`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(person),
  });
}
