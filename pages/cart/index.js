import Head from 'next/head';
import CartContainer from '../../components/cart/CartContainer';

export default function CartPage() {
  return (
    <>
      <div>
        <Head>
          <title>Cart</title>
        </Head>
        <div>
          <CartContainer />
        </div>
      </div>
    </>
  );
}
