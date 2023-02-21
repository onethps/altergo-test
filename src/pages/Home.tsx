import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import { useAlbumsData } from '../hooks/useAlbumsData';

export const Home = () => {
  const { albums, isLoading: isFetching } = useAlbumsData();

  if (isFetching) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '300px',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
      {albums ? (
        albums.map((album) => {
          return (
            <Card key={album.id} sx={{ width: '350px' }}>
              <CardMedia
                component="img"
                height="194"
                image={album.url}
                alt="Paella dish"
              />
              <CardContent>
                <Typography>{album.title}</Typography>
              </CardContent>
            </Card>
          );
        })
      ) : (
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            minHeight: '300px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography>Empty List</Typography>
        </Box>
      )}
    </Box>
  );
};
