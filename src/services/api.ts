// services/api.ts
import axios from 'axios';
import md5 from 'md5';

const publicKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY!;
const privateKey = process.env.MARVEL_PRIVATE_KEY!;
const baseUrl = 'https://gateway.marvel.com:443/v1/public';

export const getMarvelCharacters = async (searchQuery: string = '') => {
  const timestamp = new Date().getTime();
  const hash = md5(timestamp + privateKey + publicKey);
  
  let url = `${baseUrl}/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

  if (searchQuery) {
    url += `&nameStartsWith=${searchQuery}`;
  }

  const response = await axios.get(url);
  
  if (!response.data || !response.data.data) {
    throw new Error('Failed to fetch Marvel characters');
  }

  return response.data.data.results;
};

// Nova função para buscar um personagem pelo ID
export const getMarvelCharacterById = async (id: string) => {
  const timestamp = new Date().getTime();
  const hash = md5(timestamp + privateKey + publicKey);
  const url = `${baseUrl}/characters/${id}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

  const response = await axios.get(url);

  if (!response.data || !response.data.data) {
    throw new Error('Failed to fetch Marvel character');
  }

  return response.data.data.results[0];
};
