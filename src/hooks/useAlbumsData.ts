import axios from 'axios';
import { useState, useEffect } from 'react';
import { IAlbum } from '../interfaces/interfaces';
import { instance } from '../services/config';

export const useAlbumsData = () => {
  const [albums, setAlbums] = useState<IAlbum[]>([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      const albums = await instance.get<IAlbum[]>('albums/1/photos');
      setAlbums(albums.data);
    };
    fetchAlbums();
  }, []);

  return { albums };
};
