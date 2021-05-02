import { Button, Icon, Link, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
  },
}));

const HomeContainer = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div>
        <h3>HOME PAGE</h3>
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
