import ecomApi from '../apis';

export const getLoginApi = async (formValues) => {
  const response = await ecomApi().post('/user/login', formValues);
  return response;
};

export const getProductsData = async (limit, offset) => {
  const response = await ecomApi().get('/products/', {
    params: {
      limit,
      offset,
    },
  });
  return response;
};

export const getProductsByCategory = async (limit, offset, category) => {
  const response = await ecomApi().get(`/products/category/${category}`, {
    params: {
      limit,
      offset,
    },
  });
  return response;
};

export const getIndividualProductDetail = async (selected_id) => {
  const response = await ecomApi().get(`/products/${selected_id}`);
  return response;
};
