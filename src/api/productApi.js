import axiosClient from './axiosClient';

const productApi = {
  get(params) {
    return axiosClient.get('/products', { params });
  },
  getById(id) {
    return axiosClient.get(`/products/${id}`);
  }
};

export default productApi;
