import { Box, Card, CardContent } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';

export const Profile = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ width: '350px' }}>
        <CardContent>
          <Typography variant="h5" textAlign="center">
            Profile
          </Typography>
          <FormGroup
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginY: 2 }}
          >
            <TextField defaultValue="admin" label="username" disabled />
            <TextField defaultValue="12345" label="password" disabled />
          </FormGroup>
        </CardContent>
      </Card>
    </Box>
  );
};
