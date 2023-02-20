import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { useAlbumsData } from '../hooks/useAlbumsData';

export const Home = () => {
  const { albums } = useAlbumsData();

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
        <div>NoCARDS</div>
      )}
    </Box>
  );
};
