import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Select, SelectChangeEvent } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { userActions } from '../../redux/reducers/user';

export const pages = [
  {
    name: 'Home',
    route: '/',
  },
  {
    name: 'News',
    route: '/news',
  },
  {
    name: 'Profile',
    route: '/profile',
  },
];

function Header() {
  const isLoggedIn = useAppSelector((state) => state.user.isAuth);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [lang, setLang] = useState('ua');

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value as string);
  };

  const handleLogout = () => dispatch(userActions.authUser(false));

  return (
    <AppBar component="nav">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
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
                LOGOUT
              </Button>
            ) : (
              <Button
                to={'/login'}
                component={RouterLink}
                sx={{
                  color: 'white',
                }}
              >
                LOGIN
              </Button>
            )}

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
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={lang}
              label="Language"
              onChange={handleChange}
            >
              <MenuItem value={'ua'}>UA</MenuItem>
              <MenuItem value={'en'}>EN</MenuItem>
            </Select>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
