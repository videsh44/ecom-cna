import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: '#3366FF',
  },
  root: {
    flexGrow: 1,
  },

  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 123,
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
  },
  mainContainer: {
    paddingTop: '100px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const MobileNav = ({ children }) => {
  const router = useRouter();
  const classes = useStyles();
  const [value, setValue] = useState('home');

  const onIconsPress = (url) => {
    router.push(url);
  };
  return (
    <>
      <AppBar className={classes.appbar} position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link href="/">VIDESH G</Link>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <main className={classes.mainContainer}>{children}</main>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className={classes.stickToBottom}
      >
        <BottomNavigationAction
          onClick={() => onIconsPress('/')}
          label="Home"
          value="home"
          icon={<HomeIcon />}
        />

        <BottomNavigationAction
          onClick={() => onIconsPress('/products')}
          label="Products"
          value="products"
          icon={<StorefrontIcon />}
        />

        <BottomNavigationAction
          label="Cart"
          value="cart"
          icon={<ShoppingCartIcon />}
        />
        <BottomNavigationAction
          label="Admin"
          value="admin"
          icon={<PersonIcon />}
        />
      </BottomNavigation>
    </>
  );
};

export default MobileNav;
