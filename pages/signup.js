import { makeStyles } from '@material-ui/core';
import Head from 'next/head';

import SignUpContainer from '../components/auth/sign-up/SignUpContainer';

const useStyles = makeStyles((theme) => ({
  loginContainer: {
    maxWidth: '520px',
    margin: '0px auto',
    padding: '30px',
    background: '#fff',
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',
  },
}));

const SignupPage = () => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <div className={classes.loginContainer}>
        <SignUpContainer />
      </div>
    </>
  );
};

export default SignupPage;
