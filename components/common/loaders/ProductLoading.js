import useWindowSize from '../custom-hooks/useWindowSize';
import ProductSkeleton from '../skeleton/ProductSkeleton';
import classes from './product-loading.module.css';

const ProductLoading = () => {
  const size = useWindowSize();

  const { width } = size;

  const renderArr = () => {
    if (width) {
      if (width <= 768) {
        return [1, 2];
      }
      if (width > 768 && width <= 1200) {
        return [1, 2, 3, 4];
      }
      if (width > 1200) {
        return [1, 2, 3, 4];
      }
    } else {
      return [1, 2, 3, 4];
    }
  };

  return (
    <div className={classes.products__container}>
      {renderArr().map((value, i) => (
        <div key={i} className={classes.card__box}>
          <ProductSkeleton />
        </div>
      ))}
    </div>
  );
};

export default ProductLoading;
