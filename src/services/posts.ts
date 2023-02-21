import { instance } from './config';

export const postAPI = {
  getPosts: (limit: number) => {
    return instance.get(`/posts?&_limit=${limit}`);
  },
  deletePost: (id: number) => {
    return instance.delete(`posts/${id}`);
  },
};
