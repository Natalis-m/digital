import axios from 'axios';

const baseUrl = 'http://localhost:3001/data';

export const getItems = async () => {
  try {
    const { data } = await axios.get(baseUrl);
    return data;
  } catch (err) {
    console.log('err', err);
  }
};
