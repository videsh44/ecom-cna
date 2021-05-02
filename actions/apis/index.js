import axios from 'axios';

const ecomApi = () => {
  return axios.create({
    baseURL: 'https://ecommerce-videsh.herokuapp.com',
  });
};

export default ecomApi;
