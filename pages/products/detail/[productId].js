import Head from 'next/head';
import ProductDetailsContainer from '../../../components/product/details/ProductDetailsContainer';
import {
  getIndividualProductDetail,
  getProductsData,
} from '../../../actions/api-calls/product';

const ProductDetailsPage = ({ productData }) => {
  return (
    <div>
      <Head>
        <title>Product Details</title>
      </Head>

      <ProductDetailsContainer productData={productData} />
    </div>
  );
};

export async function getStaticPaths() {
  const limit = 30;
  const offset = 0;
  const response = await getProductsData(limit, offset);
  let paths;
  if (
    response &&
    response.data &&
    response.data.products &&
    response.data.products.length !== 0
  ) {
    paths = response.data.products.map((pro) => ({
      params: { productId: pro._id },
    }));
  } else {
    paths = {
      params: { productId: '6083c7a30583ba0017d4f2a3' },
    };
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { productId } = params;
  const response = await getIndividualProductDetail(productId);

  return {
    props: {
      productData: response.data || {},
    }, // will be passed to the page component as props
  };
}

export default ProductDetailsPage;
