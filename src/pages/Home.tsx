import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container/Container';

interface IAlbum {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const Home = () => {
  const [albums, setAlbums] = useState<IAlbum[]>([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      const albums = await axios.get<IAlbum[]>(
        'https://jsonplaceholder.typicode.com/albums/1/photos',
      );
      setAlbums(albums.data);
    };
    fetchAlbums();
  }, []);

  return (
    <Container>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {albums ? (
          albums.map((album) => {
            return (
              <Card sx={{ width: '350px' }}>
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
    </Container>
  );
};
