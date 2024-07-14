import axios from 'axios';
import { Image } from '../types';

const API_KEY = 'nBjDx3M3zD2WrpPhfkSHVh1YXawb-uZYOaY5iVd1jYc';
axios.defaults.baseURL = 'https://api.unsplash.com';

const fetchImagesApi = async <T>(
  searchTerm: string = '',
  page: number,
): Promise<T> => {
  const params = new URLSearchParams({
    client_id: API_KEY,
    query: searchTerm,
    page: page.toString(),
    per_page: '12',
    orientation: 'landscape',
  });

  const { data } = await axios.get<T>(`search/photos?${params}`);
  return data;
};

export default fetchImagesApi;
