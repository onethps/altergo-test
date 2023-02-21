import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { userActions } from '../../redux/reducers/user';
import LinearProgress from '@mui/material/LinearProgress';
import { useTranslation } from 'react-i18next';

function Header() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { t, i18n, ready } = useTranslation();

  const isLoggedIn = useAppSelector((state) => state.user.isAuth);
  const status = useAppSelector((state) => state.posts.status);

  const [locale, setLocale] = useState(i18n.language);

  const isFetching = status === 'loading';

  const handleLogout = () => dispatch(userActions.authUser(false));

  const handleChange = (event: SelectChangeEvent) => {
    const newValue = event.target.value as string;
    setLocale(newValue);
    i18n.changeLanguage(newValue);
    localStorage.setItem('lng', newValue);
  };

  const pages = t('pages', { returnObjects: true, defaultValue: 'page' });

  return (
    <AppBar component="nav">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {!ready ? (
            <div>loading</div>
          ) : (
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page: any) => (
                <Button
                  to={page.route}
                  key={page.name}
                  component={RouterLink}
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    opacity: location.pathname === page.route ? 1 : 0.5,
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          )}
          <Box
            sx={{
              display: 'flex',
              flexGrow: 0,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            {isLoggedIn ? (
              <Button
                sx={{
                  color: 'white',
                }}
                onClick={handleLogout}
              >
                {t('logoutText')}
              </Button>
            ) : (
              <Button
                to={'/login'}
                component={RouterLink}
                sx={{
                  color: 'white',
                }}
              >
                {t('loginText')}
              </Button>
            )}

            <FormControl sx={{ m: 1 }}>
              <Select
                sx={{
                  color: 'white',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',
                  },
                  '& .MuiSvgIcon-root': {
                    color: 'white',
                  },
                  '& > fieldset': { border: 'none' },
                }}
                labelId="dialog-select-label"
                id="dialog-select"
                value={locale}
                onChange={handleChange}
                input={<OutlinedInput label="language" />}
              >
                <MenuItem value={'en'}>en</MenuItem>
                <MenuItem value={'ua'}>ua</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Toolbar>
      </Container>
      {isFetching && <LinearProgress />}
    </AppBar>
  );
}
export default Header;
