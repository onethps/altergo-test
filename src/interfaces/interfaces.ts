export interface IAlbum {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
