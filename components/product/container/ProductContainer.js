import { makeStyles } from '@material-ui/core';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  getProductsByCategory,
  getProductsData,
} from '../../../actions/api-calls/product';
import ProductLoading from '../../common/loaders/ProductLoading';
import CategoryTabs from '../../layout/tabs/CategoryTabs';
import ProductCard from '../product-card/ProductCard';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '90%',
    maxWidth: '1400px',
    margin: '40px auto 0px auto',
  },
  cardWrp: {
    width: '90%',
    maxWidth: '300px',
    margin: '12px',
    padding: '15px 0px 0px 12px',
  },
}));

const ProductContainer = ({ productsData, usedFor }) => {
  const router = useRouter();
  const { count, products } = productsData;
  const [productStateData, setProductStateData] = useState(products);
  const [offset, setOffset] = useState(products ? products.length : 0);
  const classes = useStyles();

  useEffect(() => {
    setProductStateData(products);
    return () => {
      setProductStateData([]);
    };
  }, [router.query, products]);

  const fetchDataForAll = async () => {
    const limit = 8;
    let temp_offset = offset + limit;
    const response = await getProductsData(limit, temp_offset);
    if (response && response.data) {
      const { products } = response.data;
      setProductStateData((state) => {
        return [...state, ...products];
      });
      setOffset(temp_offset);
    }
  };
  const fetchDataForCategory = async () => {
    if (router && router.query) {
      const { category } = router.query;

      if (category) {
        const limit = 8;
        let temp_offset = offset + limit;
        const response = await getProductsByCategory(
          limit,
          temp_offset,
          category
        );
        if (response && response.data) {
          const { products } = response.data;
          setProductStateData((state) => {
            return [...state, ...products];
          });
          setOffset(temp_offset);
        }
      }
    }
  };

  return (
    <>
      {/* <div className={classes.root}> */}
      <CategoryTabs />
      {productStateData && productStateData.length !== 0 ? (
        <InfiniteScroll
          dataLength={productStateData.length} //This is important field to render the next data
          next={usedFor === 'all' ? fetchDataForAll : fetchDataForCategory}
          hasMore={productStateData.length < count ? true : false}
          loader={<ProductLoading />}
          endMessage={
            <p style={{ textAlign: 'center', paddingBottom: '70px' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className={classes.root}>
            {productStateData.map((pro, i) => (
              <div key={pro._id} className={classes.cardWrp}>
                <ProductCard {...pro} />
              </div>
            ))}
          </div>
        </InfiniteScroll>
      ) : (
        <div>NO DATA</div>
      )}
      {/* </div> */}
    </>
  );
};

export default ProductContainer;
