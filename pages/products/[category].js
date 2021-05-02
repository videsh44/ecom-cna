import Head from 'next/head';
import { getProductsByCategory } from '../../actions/api-calls/product';
import ProductLoading from '../../components/common/loaders/ProductLoading';

import ProductContainer from '../../components/product/container/ProductContainer';

const CategoryPage = ({ productsData }) => {
  if (!productsData) {
    return (
      <div>
        <Head>
          <title>Products</title>
        </Head>
        <div>
          <ProductLoading />
        </div>
      </div>
    );
  }

  return (
    <>
      <div>
        <Head>
          <title>Products</title>
        </Head>
        <div>
          <ProductContainer usedFor="category" productsData={productsData} />
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { category: 'phone' } },
      { params: { category: 'vegetable' } },
      { params: { category: 'electronics' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const limit = 20;
  const offset = 0;
  const { category } = params;
  const response = await getProductsByCategory(limit, offset, category);

  return {
    props: {
      productsData: response.data || {},
    }, // will be passed to the page component as props
  };
}

export default CategoryPage;
