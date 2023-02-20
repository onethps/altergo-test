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
import React from 'react';

export const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ width: '381px' }}>
        <CardContent>
          <Typography variant="h5" textAlign="center">
            LOGIN
          </Typography>

          <FormGroup
            sx={{ display: 'flex', gap: 2, padding: 5, justifyContent: 'center' }}
          >
            {/* //username */}
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-username">username</InputLabel>
              <OutlinedInput
                id="outlined-adornment-username"
                aria-describedby="outlined-weight-helper-text"
                label="username"
              />
            </FormControl>
            {/* //password */}
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
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
                label="Password"
              />
            </FormControl>
            <Button variant="contained">LOGIN</Button>
          </FormGroup>
        </CardContent>
      </Card>
    </Box>
  );
};
