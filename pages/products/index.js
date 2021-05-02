import Head from 'next/head';
import { getProductsData } from '../../actions/api-calls/product';
import ProductLoading from '../../components/common/loaders/ProductLoading';

import ProductContainer from '../../components/product/container/ProductContainer';

export default function ProductPage({ productsData }) {
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
          <ProductContainer usedFor="all" productsData={productsData} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const limit = 30;
  const offset = 0;
  const response = await getProductsData(limit, offset);

  return {
    props: {
      productsData: response.data || {},
    }, // will be passed to the page component as props
  };
}
