import { Button, Icon, Link, makeStyles } from '@material-ui/core';
import { useSession } from 'next-auth/client';

const useStyle = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',
  },
  user__name: {
    color: 'green',
    textTransform: 'uppercase',
  },
}));

const HomeContainer = () => {
  const [session] = useSession();
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div>
        {session ? (
          <h3>
            Welcome
            {'  '}
            <span className={classes.user__name}>
              {session.username ? session.username : 'User'}
            </span>
            {'  '}
            To Our Ecommerce Platform Check Out Our Products
          </h3>
        ) : (
          <h3>
            Welcome Guest To Our Ecommerce Platform Check Out Our Products
          </h3>
        )}
        <Link className={classes.link} href="/products">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<Icon>send</Icon>}
          >
            Products
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeContainer;
