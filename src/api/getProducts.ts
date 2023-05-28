import axios from 'axios';

const getProducts = async () => {
  try {
    const response = await axios.get<Product[]>('/api');

    return response.data;
  } catch (error) {
    throw new Error('API getProducts error');
  }
};

export default getProducts;
