import { useEffect, useState } from 'react';

import { IAlbum } from '../interfaces/interfaces';
import { instance } from '../services/config';

export const useAlbumsData = () => {
  const [albums, setAlbums] = useState<IAlbum[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAlbums = async () => {
      setIsLoading(true);
      const albums = await instance.get<IAlbum[]>('albums/1/photos');
      setAlbums(albums.data);
      setIsLoading(false);
    };
    fetchAlbums();
  }, []);

  return { albums, isLoading };
};
