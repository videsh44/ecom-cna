import classes from './cart.module.scss';

const CartContainer = () => {
  return (
    <div className={`${classes.wrap} ${classes.cf}`}>
      {/* <h1 className={classes.projTitle}>
        Responsive Table<span>-Less</span> Shopping Cart
      </h1> */}
      <div className={`${classes.heading} ${classes.cf}`}>
        <h1>My Cart</h1>
        <a href="#!" className={classes.continue}>
          Continue Shopping
        </a>
      </div>
      <div className={classes.cart}>
        <ul className={classes.cartWrap}>
          <li className={`${classes.items} ${classes.odd}`}>
            <div className={classes.infoWrap}>
              <div className={classes.cartSection}>
                {/* <img
                  src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg"
                  alt=""
                  className="itemImg"
                /> */}
                <p className={classes.itemNumber}>#QUE-007544-002</p>
                <h3>Item Name 1</h3>

                <p>
                  <input
                    type="text"
                    className={classes.qty}
                    placeholder="3"
                    disabled
                  />
                  x $5.00
                </p>

                <p className={classes.stockStatus}> In Stock</p>
              </div>

              <div className={`${classes.prodTotal} ${classes.cartSection}`}>
                <p>$15.00</p>
              </div>
              <div className={`${classes.cartSection} ${classes.removeWrap}`}>
                <a href="#" className={classes.remove}>
                  x
                </a>
              </div>
            </div>
          </li>
          <li className={`${classes.items} ${classes.even}`}>
            <div className={classes.infoWrap}>
              <div className={classes.cartSection}>
                {/* <img
                  src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg"
                  alt=""
                  className="itemImg"
                /> */}
                <p className={classes.itemNumber}>#QUE-007544-002</p>
                <h3>Item Name 1</h3>

                <p>
                  <input
                    type="text"
                    className={classes.qty}
                    placeholder="3"
                    disabled
                  />
                  x $5.00
                </p>

                <p className={classes.stockStatus}> In Stock</p>
              </div>

              <div className={`${classes.prodTotal} ${classes.cartSection}`}>
                <p>$15.00</p>
              </div>
              <div className={`${classes.cartSection} ${classes.removeWrap}`}>
                <a href="#!" className={classes.remove}>
                  x
                </a>
              </div>
            </div>
          </li>

          <li className={`${classes.items} ${classes.odd}`}>
            <div className={classes.infoWrap}>
              <div className={classes.cartSection}>
                {/* <img
                  src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg"
                  alt=""
                  className="itemImg"
                /> */}
                <p className={classes.itemNumber}>#QUE-007544-002</p>
                <h3>Item Name 1</h3>

                <p>
                  <input
                    type="text"
                    className={classes.qty}
                    placeholder="3"
                    disabled
                  />
                  x $5.00
                </p>

                <p className={`${classes.stockStatus} ${classes.out}`}>
                  Out of Stock
                </p>
              </div>

              <div className={`${classes.prodTotal} ${classes.cartSection}`}>
                <p>$15.00</p>
              </div>
              <div className={`${classes.cartSection} ${classes.removeWrap}`}>
                <a href="#!" className={classes.remove}>
                  x
                </a>
              </div>
            </div>
          </li>
          <li className={`${classes.items} ${classes.even}`}>
            <div className={classes.infoWrap}>
              <div className={`${classes.cartSection} ${classes.info}`}>
                {/* <img
                  src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg"
                  alt=""
                  className="itemImg"
                /> */}
                <p className={classes.itemNumber}>#QUE-007544-002</p>
                <h3>Item Name 1</h3>

                <p>
                  <input
                    type="text"
                    className={classes.qty}
                    placeholder="3"
                    disabled
                  />
                  x $5.00
                </p>

                <p className={classes.stockStatus}> In Stock</p>
              </div>

              <div className={`${classes.prodTotal} ${classes.cartSection}`}>
                <p>$15.00</p>
              </div>

              <div className={`${classes.cartSection} ${classes.removeWrap}`}>
                <a href="#" className={classes.remove}>
                  x
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className={`${classes.subtotal} ${classes.cf}`}>
        <ul>
          <li className={classes.totalRow}>
            <span className={classes.label}>Subtotal</span>
            <span className={classes.value}>$35.00</span>
          </li>

          <li className={classes.totalRow}>
            <span className={classes.label}>Shipping</span>
            <span className={classes.value}>$5.00</span>
          </li>

          <li className={classes.totalRow}>
            <span className={classes.label}>Tax</span>
            <span className={classes.value}>$4.00</span>
          </li>
          <li className={`${classes.totalRow} ${classes.final}`}>
            <span className={classes.label}>Total</span>
            <span className={classes.value}>$44.00</span>
          </li>
          <li className={classes.totalRow}>
            <a href="#" className={`${classes.btn} ${classes.continue}`}>
              Checkout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CartContainer;
