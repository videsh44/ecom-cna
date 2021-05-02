import { makeStyles } from '@material-ui/core';

import NavBar from './NavBar';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingTop: '100px',
  },
}));

const DesktopNav = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <NavBar />

      <main className={classes.mainContainer}>{children}</main>
    </div>
  );
};

export default DesktopNav;
