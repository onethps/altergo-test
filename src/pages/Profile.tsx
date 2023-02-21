import { Box, Card, CardContent } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const Profile = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ width: '350px' }}>
        <CardContent>
          <Typography variant="h5" textAlign="center">
            {t('profilePage.title')}
          </Typography>
          <FormGroup
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginY: 2 }}
          >
            <TextField
              defaultValue="admin"
              label={t('loginPage.formUserName')}
              disabled
            />
            <TextField
              defaultValue="12345"
              label={t('loginPage.formPassword')}
              disabled
            />
          </FormGroup>
        </CardContent>
      </Card>
    </Box>
  );
};
