import {
  Button,
  Link,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import { useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import { signIn } from 'next-auth/client';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    textAlign: 'center',
  },
}));

const LoginContainer = () => {
  const classes = useStyles();

  const [values, setValues] = useState({
    password: '',
    email: '',
    emailError: false,
    passwordError: false,
  });

  const { email, password, emailError, passwordError } = values;

  const handleEmailChange = ({ target: { value, name } }) => {
    let email_error = isEmail(value);

    setValues({ ...values, [name]: value, emailError: !email_error });
  };

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async () => {
    if (!email) {
      setValues({ ...values, emailError: true });
      return;
    }
    if (!password) {
      setValues({ ...values, passwordError: true });
      return;
    }

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    console.log(res);
    if (res) {
      if (!res.error) {
        window.location.href = '/';
      }
    }
  };

  return (
    <div className={classes.root}>
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
        error={passwordError}
        fullWidth
        type="password"
        onChange={handleChange}
      />
      <div>
        <Button onClick={handleSubmit} variant="outlined" color="primary">
          Login
        </Button>
      </div>
      <div>
        <Typography color="secondary" variant="subtitle2" component="h2">
          No Account Create One Now <Link href="/signup">Sign Up</Link>
        </Typography>
      </div>
    </div>
  );
};

export default LoginContainer;
