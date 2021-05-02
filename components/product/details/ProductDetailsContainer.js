import {
  Button,
  Chip,
  Fab,
  makeStyles,
  Tooltip,
  Typography,
} from '@material-ui/core';
import Image from 'next/image';
import classes from './product-detail.module.css';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import useWindowSize from '../../common/custom-hooks/useWindowSize';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(3),
  },
  typo: {
    margin: theme.spacing(3),
  },
  button__root: {
    textAlign: 'center',
  },
  category: {
    // alignSelf: 'flex-start',
    margin: theme.spacing(3),
  },
}));

const ProductDetailsContainer = ({ productData }) => {
  const { productImage, category, price, name } = productData;
  const size = useWindowSize();

  const { width } = size;
  const materialClasses = useStyles();
  return (
    <div className={classes.detail__container}>
      <div className={classes.image__container}>
        <Image
          layout="responsive"
          src={productImage}
          width={500}
          height={500}
        />
      </div>
      <div className={classes.info__container}>
        <div>
          <div className={materialClasses.category}>
            <Tooltip placement="right" title="Category">
              <Chip color="primary" label={category} variant="outlined" />
            </Tooltip>
          </div>
          <Tooltip placement="top" title={name}>
            <Typography
              className={materialClasses.typo}
              variant={width < 768 ? 'h6' : 'h3'}
              noWrap
            >
              {name}
            </Typography>
          </Tooltip>
          <Typography
            className={materialClasses.typo}
            color="secondary"
            align="center"
            variant={width < 768 ? 'h6' : 'h4'}
            noWrap
          >
            $ {price}
          </Typography>

          <div className={materialClasses.button__root}>
            {width > 400 ? (
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={materialClasses.button}
                startIcon={<ShoppingBasketIcon />}
              >
                Add To Cart
              </Button>
            ) : (
              <Fab size="medium" variant="extended" color="primary">
                <ShoppingBasketIcon />
              </Fab>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsContainer;
