import axios from 'axios';

export const BASE_URL = {
  LOCAL:'https://gokisoft.com/api/fake/1089/'
};
const axiosClient = axios.create({
  baseURL: BASE_URL,
  // baseURL: BASE_URL['LOCAL'],
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
});


  export default axiosClient;