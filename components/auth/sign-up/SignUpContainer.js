import {
  Button,
  Link,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import { useState } from 'react';
import isEmail from 'validator/lib/isEmail';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    textAlign: 'center',
  },
}));

const SignUpContainer = () => {
  const classes = useStyles();

  const [values, setValues] = useState({
    name: '',
    password: '',
    email: '',
    emailError: false,
  });

  const { email, password, emailError, name } = values;

  const handleEmailChange = ({ target: { value, name } }) => {
    let email_error = isEmail(value);

    setValues({ ...values, [name]: value, emailError: !email_error });
  };

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  return (
    <div className={classes.root}>
      <TextField
        //   error={emailError}
        id="name"
        //  helperText={nameError ? 'Invalid name' : ''}
        label="UserName"
        name="name"
        fullWidth
        value={name}
        onChange={handleChange}
      />
      <TextField
        error={emailError}
        id="email"
        helperText={emailError ? 'Invalid Email' : ''}
        label="Email"
        name="email"
        fullWidth
        value={email}
        onChange={handleEmailChange}
      />
      <TextField
        id="password"
        name="password"
        value={password}
        label="Password"
        fullWidth
        type="password"
        onChange={handleChange}
      />
      <div>
        <Button variant="outlined" color="primary">
          Sign Up
        </Button>
      </div>
      <div>
        <Typography color="secondary" variant="subtitle2" component="h2">
          Already have an Account <Link href="/login">Log In</Link>
        </Typography>
      </div>
    </div>
  );
};

export default SignUpContainer;
