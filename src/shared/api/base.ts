import { Character, CharactersResponse } from './character';

const API_BASE = 'https://rickandmortyapi.com/api';

export const fetchData = async <T>(url: string): Promise<T> => {
  const response = await fetch(`${API_BASE}${url}`);
  return response.json();
};

export const getCharacters = (params?: Record<string, string>) => {
  const query = params ? `?${new URLSearchParams(params)}` : '';
  return fetchData<CharactersResponse>(`/character${query}`);
};

export const getCharacter = (id: string) => {
  return fetchData<Character>(`/character/${id}`);
};
