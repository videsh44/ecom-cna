import classes from './product-card.module.css';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import VisibilityIcon from '@material-ui/icons/Visibility';

import { Fab } from '@material-ui/core';
import Link from 'next/link';
import Image from 'next/image';
// import CommonImage from '../../common/image/CommonIamge';

export default function ProductCard({
  productImage,
  name,
  price,
  is_discount,
  discount,
  _id,
}) {
  return (
    <div className={classes.product_grid}>
      <div className={classes.product_image}>
        <a href="#!" className={classes.image}>
          <Image
            className={classes.pic_1}
            src={productImage}
            alt="Product Image"
            width={300}
            height={300}
          />
        </a>
        <span className={classes.product_sale_label}>hot</span>
        {is_discount && (
          <span className={classes.product_discount_label}>-{discount}%</span>
        )}
      </div>
      <div className={classes.product_content}>
        <h3 className={classes.title}>
          <Link
            href="/products/detail/[productId]"
            as={`/products/detail/${_id}`}
          >
            <a title={name} href="#!">
              {name.substring(0, 10)} {name.length > 10 ? '...' : ''}
            </a>
          </Link>
        </h3>
        <div className={classes.price}>
          <span>${price}</span> $20.00
        </div>

        <div className={classes.action__buttons}>
          <div className={classes.buttons__container}>
            <Fab size="medium" variant="extended" color="secondary">
              <VisibilityIcon />
            </Fab>
          </div>

          <div className={classes.buttons__container}>
            <Fab size="medium" variant="extended" color="primary">
              <ShoppingBasketIcon />
            </Fab>
          </div>
        </div>
      </div>
    </div>
  );
}
