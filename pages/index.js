import Head from 'next/head';
import HomeContainer from '../components/home/HomeContainer';
import parser from 'ua-parser-js';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <HomeContainer />
    </>
  );
}

Home.getInitialProps = async ({ req }) => {
  let deviceType;
  if (req) {
    deviceType = parser(req.headers['user-agent']).device.type || 'desktop';
  }
  return {
    deviceType,
  };
};
