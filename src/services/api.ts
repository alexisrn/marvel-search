import md5 from 'md5';

const publicKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY!;
const privateKey = process.env.MARVEL_PRIVATE_KEY!;
const baseUrl = 'https://gateway.marvel.com:443/v1/public';

export const getMarvelCharacters = async () => {
  const timestamp = new Date().getTime();
  const hash = md5(timestamp + privateKey + publicKey);
  const url = `${baseUrl}/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch Marvel characters');
  }

  const data = await response.json();
  return data.data.results;
};
