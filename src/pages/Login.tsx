import { VisibilityOff, Visibility } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  FormGroup,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import React, { useState, MouseEvent, ChangeEvent, FormEvent } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import { useAppDispatch } from '../hooks/redux-hooks';
import { userActions } from '../redux/reducers/user';
import { useTranslation } from 'react-i18next';

const userData = {
  username: 'admin',
  password: '12345',
};

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleToastClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setError(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      username: data.get('username'),
      password: data.get('password'),
    };
    if (JSON.stringify(user) === JSON.stringify(userData)) {
      dispatch(userActions.authUser(true));
      navigate('/profile');
      return;
    }

    setError(true);
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ width: '381px' }}>
          <CardContent>
            <Typography variant="h5" textAlign="center">
              {t('loginPage.loginTitle')}
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                padding: 5,
                justifyContent: 'center',
              }}
            >
              {/* //username */}
              <FormControl variant="outlined">
                <InputLabel htmlFor="username"> {t('loginPage.formUserName')}</InputLabel>
                <OutlinedInput
                  error={error}
                  id="username"
                  name="username"
                  aria-describedby="outlined-weight-helper-text"
                  label={t('loginPage.formUserName')}
                />
              </FormControl>
              {/* //password */}
              <FormControl variant="outlined">
                <InputLabel htmlFor="password"> {t('loginPage.formPassword')}</InputLabel>
                <OutlinedInput
                  error={error}
                  id="password"
                  name="password"
                  autoComplete="on"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label={t('loginPage.formPassword')}
                />
              </FormControl>
              <Button variant="contained" type="submit">
                {t('loginPage.formSubmit')}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Snackbar open={error} autoHideDuration={6000} onClose={handleToastClose}>
        <Alert onClose={handleToastClose} severity="error" sx={{ width: '100%' }}>
          {t('loginPage.loginError')}
        </Alert>
      </Snackbar>
    </>
  );
};
