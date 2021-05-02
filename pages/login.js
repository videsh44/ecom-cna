import { makeStyles } from '@material-ui/core';
import Head from 'next/head';

import LoginContainer from '../components/auth/login/LoginContainer';

const useStyles = makeStyles((theme) => ({
  loginContainer: {
    maxWidth: '520px',
    margin: '0px auto',
    padding: '30px',
    background: '#fff',
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className={classes.loginContainer}>
        <LoginContainer />
      </div>
    </>
  );
};

export default LoginPage;
