import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Select, SelectChangeEvent } from '@mui/material';

export const pages = [
  {
    name: 'Home',
    route: '/',
  },
  {
    name: 'Profile',
    route: '/profile',
  },
  {
    name: 'News',
    route: '/news',
  },
];

function Header() {
  const location = useLocation();

  const [lang, setLang] = React.useState('ua');

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value as string);
  };

  return (
    <AppBar position="static">
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
            <Button
              to={'/login'}
              component={RouterLink}
              sx={{
                color: 'white',
              }}
            >
              LOGIN
            </Button>

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
